#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const templateDir = path.join(rootDir, "template");

// Dev-only agents that should NOT be published to users
const DEV_ONLY_AGENTS = new Set([
  "codebase-deep-analyzer.md",
  "orchestra-analyzer.md",
  "orchestra-reviewer.md",
  "repo-deep-analyzer.md",
]);

// System files to include in the template
const SYSTEM_PATHS = [
  { src: ".claude/agents", dest: ".claude/agents", filter: (f) => !DEV_ONLY_AGENTS.has(f) },
  { src: ".claude/commands/orchestra", dest: ".claude/commands/orchestra" },
  { src: ".claude/rules", dest: ".claude/rules", filter: (f) => f.endsWith(".orchestra.md") },
  { src: ".claude/skills", dest: ".claude/skills", filter: (f) => f.endsWith(".orchestra.md") },
  { src: ".orchestra/roles", dest: ".orchestra/roles" },
  { src: ".orchestra/blueprints", dest: ".orchestra/blueprints" },
  { src: ".orchestra/config.yml", dest: ".orchestra/config.yml" },
  { src: ".orchestra/knowledge.md", dest: ".orchestra/knowledge.md" },
  { src: ".orchestra/README.md", dest: ".orchestra/README.md" },
  { src: "CLAUDE.md", dest: "CLAUDE.md" }
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyRecursive(src, dest, filter = null) {
  const fullSrc = path.join(rootDir, src);
  const fullDest = path.join(templateDir, dest);

  if (!fs.existsSync(fullSrc)) {
    console.warn(`  [!] Source not found, skipping: ${src}`);
    return;
  }

  const stat = fs.statSync(fullSrc);

  if (stat.isDirectory()) {
    ensureDir(fullDest);
    const entries = fs.readdirSync(fullSrc, { withFileTypes: true });
    
    for (const entry of entries) {
      if (filter && !filter(entry.name)) continue;
      
      const entrySrc = path.join(src, entry.name);
      const entryDest = path.join(dest, entry.name);
      
      const fullEntrySrc = path.join(rootDir, entrySrc);
      const fullEntryDest = path.join(templateDir, entryDest);

      if (entry.isSymbolicLink()) {
        const linkTarget = fs.readlinkSync(fullEntrySrc);
        if (fs.existsSync(fullEntryDest)) fs.unlinkSync(fullEntryDest);
        fs.symlinkSync(linkTarget, fullEntryDest);
      } else if (entry.isDirectory()) {
        copyRecursive(entrySrc, entryDest, filter);
      } else {
        fs.copyFileSync(fullEntrySrc, fullEntryDest);
      }
    }
  } else {
    ensureDir(path.dirname(fullDest));
    fs.copyFileSync(fullSrc, fullDest);
  }
}

console.log("\n  Orchestra — Template Builder");
console.log("  Packing root system files into template/...\n");

for (const item of SYSTEM_PATHS) {
  copyRecursive(item.src, item.dest, item.filter);
  console.log(`  [+] Packed: ${item.src}`);
}

console.log("\n  Done! Template is updated and ready for release.");
console.log("  Run 'yarn build' to test the installation from this template.\n");
