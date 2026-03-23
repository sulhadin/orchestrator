#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "..", "template");

const ORCHESTRA_SECTION_START = "<!-- orchestra -->";
const ORCHESTRA_SECTION_END = "<!-- /orchestra -->";

const USER_DIRS = ["milestones"];

const ALLOW_PERMISSIONS = [
  "Bash(npm *)",
  "Bash(npx *)",
  "Bash(node *)",
  "Bash(git *)",
  "Bash(yarn *)",
  "Bash(pnpm *)",
  "Bash(tsc *)",
  "Bash(npx tsc *)",
  "Bash(npx vitest *)",
  "Bash(mkdir *)",
  "Bash(rm *)",
  "Bash(cp *)",
  "Bash(mv *)",
  "Bash(cat *)",
  "Bash(ls *)",
  "Bash(chmod *)",
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
  const flags = {
    skipPermissions: false,
    help: false,
  };

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
        console.error("  Unknown flag: " + arg);
        process.exit(1);
    }
  }

  return flags;
}

function showHelp() {
  console.log("");
  console.log("  Usage: npx @sulhadin/orchestrator [options]");
  console.log("");
  console.log("  Options:");
  console.log("    --dangerously-skip-permissions   Auto-allow all tool permissions (no y/n prompts)");
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
  if (endIdx === -1) {
    return content.slice(startIdx);
  }
  return content.slice(startIdx, endIdx + ORCHESTRA_SECTION_END.length);
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

  if (!settings.permissions) {
    settings.permissions = {};
  }

  const existing = settings.permissions.allow || [];
  const merged = [...new Set([...existing, ...ALLOW_PERMISSIONS])];
  settings.permissions.allow = merged;

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + "\n");

  const added = merged.length - existing.length;
  if (added > 0) {
    console.log("  [+] Permissions configured (" + added + " rules added to .claude/settings.local.json)");
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
  const orchestraDest = path.join(targetDir, ".orchestra");
  const isUpgrade = fs.existsSync(orchestraDest);

  if (isUpgrade) {
    const backups = {};

    for (const dir of USER_DIRS) {
      const dirPath = path.join(orchestraDest, dir);
      const backupPath = path.join(targetDir, ".orchestra-backup-" + dir);

      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath).filter((f) => f !== ".gitkeep");
        if (files.length > 0) {
          copyDirRecursive(dirPath, backupPath);
          backups[dir] = backupPath;
          console.log("  [~] Backed up " + dir + "/ (" + files.length + " items)");
        }
      }
    }

    rmDirRecursive(orchestraDest);
    console.log("  [~] Removed old .orchestra/");

    copyDirRecursive(orchestraSrc, orchestraDest);
    console.log("  [+] .orchestra/ installed (clean)");

    for (const [dir, backupPath] of Object.entries(backups)) {
      const restorePath = path.join(orchestraDest, dir);

      if (fs.existsSync(restorePath)) {
        rmDirRecursive(restorePath);
      }

      copyDirRecursive(backupPath, restorePath);
      rmDirRecursive(backupPath);
      console.log("  [+] Restored " + dir + "/");
    }
  } else {
    copyDirRecursive(orchestraSrc, orchestraDest);
    console.log("  [+] .orchestra/ installed");
  }

  // Handle CLAUDE.md
  const templateClaudeMd = fs.readFileSync(
    path.join(templateDir, "CLAUDE.md"),
    "utf-8"
  );
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
        existingContent = existingContent.replace(
          existingSection,
          orchestraSection
        );
      }
      console.log("  [~] CLAUDE.md updated (Orchestra section replaced)");
    } else {
      existingContent =
        existingContent.trimEnd() + "\n\n" + orchestraSection + "\n";
      console.log("  [+] CLAUDE.md updated (Orchestra section appended)");
    }

    fs.writeFileSync(targetClaudeMdPath, existingContent);
  } else {
    fs.copyFileSync(path.join(templateDir, "CLAUDE.md"), targetClaudeMdPath);
    console.log("  [+] CLAUDE.md created");
  }

  // Handle permissions
  if (flags.skipPermissions) {
    setupPermissions();
  }

  console.log("");
  console.log("  Done! Orchestra is ready.");
  console.log("");
  console.log("  Next steps:");
  console.log("    1. Open Claude Code in your project");
  console.log('    2. Say "#pm" to start orchestrating');
  console.log("");
}

run();
