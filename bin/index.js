#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "..", "template");

const ORCHESTRA_SECTION_START = "<!-- orchestra -->";
const ORCHESTRA_SECTION_END = "<!-- /orchestra -->";

// User directories to preserve during upgrade
const ORCHESTRA_USER_DIRS = ["milestones", "blueprints"];
const CLAUDE_USER_DIRS = ["skills", "rules"];

const ALLOW_PERMISSIONS = [
  "Bash(*)",
  "Read(*)",
  "Write(*)",
  "Edit(*)",
  "Glob(*)",
  "Grep(*)",
  "Agent(*)",
  "WebFetch(*)",
  "WebSearch(*)",
];

function parseArgs() {
  const args = process.argv.slice(2);
  const flags = { skipPermissions: false, help: false };

  for (const arg of args) {
    switch (arg) {
      case "--dangerously-skip-permissions":
        flags.skipPermissions = true;
        break;
      case "--help":
      case "-h":
        flags.help = true;
        break;
      default:
        // Ignore files passed by lint-staged or other tools
        break;
    }
  }

  return flags;
}

function showHelp() {
  console.log("");
  console.log("  Usage: npx @sulhadin/orchestrator [options]");
  console.log("");
  console.log("  Options:");
  console.log("    --dangerously-skip-permissions   Auto-allow all tool permissions");
  console.log("    --help, -h                       Show this help");
  console.log("");
  console.log("  Examples:");
  console.log("    npx @sulhadin/orchestrator");
  console.log("    npx @sulhadin/orchestrator --dangerously-skip-permissions");
  console.log("");
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else if (entry.isSymbolicLink()) {
      const linkTarget = fs.readlinkSync(srcPath);
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      fs.symlinkSync(linkTarget, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function rmDirRecursive(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      rmDirRecursive(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(dir);
}

function extractOrchestraSection(content) {
  const startIdx = content.indexOf(ORCHESTRA_SECTION_START);
  if (startIdx === -1) return null;
  const endIdx = content.indexOf(ORCHESTRA_SECTION_END, startIdx);
  if (endIdx === -1) return content.slice(startIdx);
  return content.slice(startIdx, endIdx + ORCHESTRA_SECTION_END.length);
}

/**
 * Smart merge for user directories (skills, rules, blueprints):
 * - .orchestra.md files = system files → always updated from template
 * - other .md files = user files → preserved
 */
function smartMergeDir(backupPath, restorePath, templateDirPath) {
  const templateFiles = fs.existsSync(templateDirPath)
    ? fs.readdirSync(templateDirPath)
    : [];
  const backupFiles = fs.readdirSync(backupPath).filter((f) => f !== ".gitkeep");
  let restored = 0;

  for (const file of backupFiles) {
    // User-created files: not in template AND not .orchestra.md
    const isOrchestraFile = file.endsWith(".orchestra.md");
    if (!templateFiles.includes(file) && !isOrchestraFile) {
      const srcFile = path.join(backupPath, file);
      const destFile = path.join(restorePath, file);
      if (fs.statSync(srcFile).isDirectory()) {
        copyDirRecursive(srcFile, destFile);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
      restored++;
    }
  }

  return restored;
}

function setupPermissions() {
  const claudeDir = path.join(targetDir, ".claude");
  const settingsPath = path.join(claudeDir, "settings.local.json");

  if (!fs.existsSync(claudeDir)) {
    fs.mkdirSync(claudeDir, { recursive: true });
  }

  let settings = {};
  if (fs.existsSync(settingsPath)) {
    try {
      settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));
    } catch {
      settings = {};
    }
  }

  if (!settings.permissions) settings.permissions = {};
  const existing = settings.permissions.allow || [];
  const merged = [...new Set([...existing, ...ALLOW_PERMISSIONS])];
  settings.permissions.allow = merged;

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + "\n");

  const added = merged.length - existing.length;
  if (added > 0) {
    console.log("  [+] Permissions configured (" + added + " rules added)");
  } else {
    console.log("  [~] Permissions already configured");
  }
}

function run() {
  const flags = parseArgs();
  if (flags.help) {
    showHelp();
    return;
  }

  console.log("");
  console.log("  Orchestra — AI Team Orchestration");
  console.log("  Installing into: " + targetDir);
  console.log("");

  const orchestraSrc = path.join(templateDir, ".orchestra");
  const claudeSrc = path.join(templateDir, ".claude");
  const orchestraDest = path.join(targetDir, ".orchestra");
  const claudeDest = path.join(targetDir, ".claude");
  const isUpgrade = fs.existsSync(orchestraDest);

  if (isUpgrade) {
    // ── Backup user data ──
    const backups = {};

    // .orchestra/ user dirs (milestones, blueprints)
    for (const dir of ORCHESTRA_USER_DIRS) {
      const dirPath = path.join(orchestraDest, dir);
      const backupPath = path.join(targetDir, ".orchestra-backup-" + dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath).filter((f) => f !== ".gitkeep");
        if (files.length > 0) {
          copyDirRecursive(dirPath, backupPath);
          backups["orchestra:" + dir] = { backupPath, type: "orchestra", dir };
          console.log("  [~] Backed up .orchestra/" + dir + "/ (" + files.length + " items)");
        }
      }
    }

    // .claude/ user dirs (skills, rules — user may have added custom ones)
    for (const dir of CLAUDE_USER_DIRS) {
      const dirPath = path.join(claudeDest, dir);
      const backupPath = path.join(targetDir, ".claude-backup-" + dir);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath).filter((f) => f !== ".gitkeep");
        if (files.length > 0) {
          copyDirRecursive(dirPath, backupPath);
          backups["claude:" + dir] = { backupPath, type: "claude", dir };
          console.log("  [~] Backed up .claude/" + dir + "/ (" + files.length + " items)");
        }
      }
    }

    // knowledge.md
    const knowledgePath = path.join(orchestraDest, "knowledge.md");
    const knowledgeBackup = path.join(targetDir, ".orchestra-backup-knowledge.md");
    let hasKnowledge = false;
    if (fs.existsSync(knowledgePath)) {
      const content = fs.readFileSync(knowledgePath, "utf-8");
      const marker = "<!-- New entries go here";
      const idx = content.indexOf(marker);
      if (idx !== -1 && content.slice(idx + marker.length).trim().length > 10) {
        fs.copyFileSync(knowledgePath, knowledgeBackup);
        hasKnowledge = true;
        console.log("  [~] Backed up knowledge.md");
      }
    }

    // config.yml (user may have customized)
    const configPath = path.join(orchestraDest, "config.yml");
    const configBackup = path.join(targetDir, ".orchestra-backup-config.yml");
    let hasConfig = false;
    if (fs.existsSync(configPath)) {
      fs.copyFileSync(configPath, configBackup);
      hasConfig = true;
      console.log("  [~] Backed up config.yml");
    }

    // ── Clean install ──
    rmDirRecursive(orchestraDest);
    console.log("  [~] Removed old .orchestra/");

    // Remove old .claude/ orchestra files (agents, commands) but keep user files
    const claudeOrchestraDirs = ["agents", "commands"];
    for (const dir of claudeOrchestraDirs) {
      const dirPath = path.join(claudeDest, dir);
      if (fs.existsSync(dirPath)) {
        // Only remove orchestra files, keep user's custom agents/commands
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
          if (file === "conductor.md" || file === "reviewer.md" || file === "orchestra") {
            const fullPath = path.join(dirPath, file);
            if (fs.statSync(fullPath).isDirectory()) {
              rmDirRecursive(fullPath);
            } else {
              fs.unlinkSync(fullPath);
            }
          }
        }
      }
    }

    copyDirRecursive(orchestraSrc, orchestraDest);
    console.log("  [+] .orchestra/ installed");

    if (fs.existsSync(claudeSrc)) {
      copyDirRecursive(claudeSrc, claudeDest);
      console.log("  [+] .claude/ orchestra files installed");
    }

    // ── Restore user data ──
    for (const [key, { backupPath, type, dir }] of Object.entries(backups)) {
      const baseDest = type === "orchestra" ? orchestraDest : claudeDest;
      const restorePath = path.join(baseDest, dir);
      const templateDirPath = type === "orchestra"
        ? path.join(orchestraSrc, dir)
        : path.join(claudeSrc, dir);

      if (dir === "milestones") {
        if (fs.existsSync(restorePath)) rmDirRecursive(restorePath);
        copyDirRecursive(backupPath, restorePath);
        console.log("  [+] Restored milestones/");
      } else {
        const restored = smartMergeDir(backupPath, restorePath, templateDirPath);
        if (restored > 0) {
          console.log("  [+] Restored " + restored + " user files in " + dir + "/");
        }
        console.log("  [~] Updated system files in " + dir + "/");
      }

      rmDirRecursive(backupPath);
    }

    // Restore knowledge.md
    if (hasKnowledge && fs.existsSync(knowledgeBackup)) {
      fs.copyFileSync(knowledgeBackup, path.join(orchestraDest, "knowledge.md"));
      fs.unlinkSync(knowledgeBackup);
      console.log("  [+] Restored knowledge.md");
    }

    // Restore config.yml (user's customizations take priority)
    if (hasConfig && fs.existsSync(configBackup)) {
      fs.copyFileSync(configBackup, path.join(orchestraDest, "config.yml"));
      fs.unlinkSync(configBackup);
      console.log("  [+] Restored config.yml (user customizations preserved)");
    }
  } else {
    // ── Fresh install ──
    copyDirRecursive(orchestraSrc, orchestraDest);
    console.log("  [+] .orchestra/ installed");

    if (fs.existsSync(claudeSrc)) {
      copyDirRecursive(claudeSrc, claudeDest);
      console.log("  [+] .claude/ installed");
    }
  }

  // ── Handle CLAUDE.md ──
  const templateClaudeMd = fs.readFileSync(path.join(templateDir, "CLAUDE.md"), "utf-8");
  const targetClaudeMdPath = path.join(targetDir, "CLAUDE.md");

  if (fs.existsSync(targetClaudeMdPath)) {
    let existingContent = fs.readFileSync(targetClaudeMdPath, "utf-8");
    const orchestraSection = extractOrchestraSection(templateClaudeMd);

    if (!orchestraSection) {
      console.log("  [!] Could not extract Orchestra section from template");
      return;
    }

    if (existingContent.includes(ORCHESTRA_SECTION_START)) {
      const existingSection = extractOrchestraSection(existingContent);
      if (existingSection) {
        existingContent = existingContent.replace(existingSection, orchestraSection);
      }
      console.log("  [~] CLAUDE.md updated (Orchestra section replaced)");
    } else {
      existingContent = existingContent.trimEnd() + "\n\n" + orchestraSection + "\n";
      console.log("  [+] CLAUDE.md updated (Orchestra section appended)");
    }

    fs.writeFileSync(targetClaudeMdPath, existingContent);
  } else {
    fs.copyFileSync(path.join(templateDir, "CLAUDE.md"), targetClaudeMdPath);
    console.log("  [+] CLAUDE.md created");
  }

  // ── Handle permissions ──
  if (flags.skipPermissions) {
    setupPermissions();
  }

  console.log("");
  console.log("  Done! Orchestra is ready.");
  console.log("");
  console.log("  Next steps:");
  console.log("    1. Open Claude Code in your project");
  console.log('    2. Type "/orchestra pm" to start planning');
  console.log('    3. Type "/orchestra start" in another terminal to execute');
  console.log("");
}

run();
