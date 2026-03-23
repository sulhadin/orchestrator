#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const targetDir = process.cwd();
const templateDir = path.join(__dirname, "..", "template");

const ORCHESTRA_SECTION_START = "<!-- orchestra -->";
const ORCHESTRA_SECTION_END = "<!-- /orchestra -->";

const USER_DIRS = ["milestones"];

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

function run() {
  console.log("");
  console.log("  Orchestra — AI Team Orchestration");
  console.log("  Installing into: " + targetDir);
  console.log("");

  const orchestraSrc = path.join(templateDir, ".orchestra");
  const orchestraDest = path.join(targetDir, ".orchestra");
  const isUpgrade = fs.existsSync(orchestraDest);

  if (isUpgrade) {
    // Backup user data directories
    const backups = {};

    for (const dir of USER_DIRS) {
      const dirPath = path.join(orchestraDest, dir);
      const backupPath = path.join(targetDir, ".orchestra-backup-" + dir);

      if (fs.existsSync(dirPath)) {
        // Check if directory has real content (not just .gitkeep)
        const files = fs.readdirSync(dirPath).filter((f) => f !== ".gitkeep");
        if (files.length > 0) {
          copyDirRecursive(dirPath, backupPath);
          backups[dir] = backupPath;
          console.log("  [~] Backed up " + dir + "/ (" + files.length + " items)");
        }
      }
    }

    // Remove old .orchestra/
    rmDirRecursive(orchestraDest);
    console.log("  [~] Removed old .orchestra/");

    // Copy fresh .orchestra/
    copyDirRecursive(orchestraSrc, orchestraDest);
    console.log("  [+] .orchestra/ installed (clean)");

    // Restore user data
    for (const [dir, backupPath] of Object.entries(backups)) {
      const restorePath = path.join(orchestraDest, dir);

      // Remove the template's empty dir first
      if (fs.existsSync(restorePath)) {
        rmDirRecursive(restorePath);
      }

      copyDirRecursive(backupPath, restorePath);
      rmDirRecursive(backupPath);
      console.log("  [+] Restored " + dir + "/");
    }
  } else {
    // Fresh install
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

  console.log("");
  console.log("  Done! Orchestra is ready.");
  console.log("");
  console.log("  Next steps:");
  console.log("    1. Open Claude Code in your project");
  console.log('    2. Say "@pm" to start orchestrating');
  console.log("");
}

run();
