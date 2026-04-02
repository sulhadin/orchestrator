const { describe, it } = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

// Extract mergeConfigYaml from index.js
const src = fs.readFileSync(path.join(__dirname, "..", "bin", "index.js"), "utf-8");
const match = src.match(/function mergeConfigYaml\([\s\S]*?^}/m);
eval(match[0]);

const userConfig = `pipeline:
  models:
    quick: haiku
    standard: sonnet
    complex: opus
  rfc_approval: skip
  push_approval: auto
  review: required
  parallel: disabled

thresholds:
  re_review_lines: 50
  phase_time_limit: 20
  phase_tool_limit: 40
  stuck_retry_limit: 5

verification:
  typecheck: "yarn tsc --noEmit"
  test: "yarn test"
  lint: "yarn lint"
`;

const templateConfig = `# Orchestra Configuration
# Customize pipeline behavior, thresholds, and verification commands.

pipeline:
  # Model selection per phase complexity
  models:
    trivial: haiku
    quick: sonnet
    standard: sonnet
    complex: opus
  rfc_approval: required
  push_approval: required
  review: required
  parallel: disabled
  default_pipeline: full
  default_complexity: standard
  max_rfc_rounds: 3

thresholds:
  milestone_lock_timeout: 120
  re_review_lines: 30
  phase_time_limit: 15
  phase_tool_limit: 40
  stuck_retry_limit: 3

verification:
  typecheck: "npx tsc --noEmit"
  test: "npm test"
  lint: "npm run lint"
`;

describe("mergeConfigYaml", () => {
  const result = mergeConfigYaml(userConfig, templateConfig);

  describe("new template keys are added", () => {
    it("adds trivial model tier", () => {
      assert.ok(result.includes("trivial: haiku"));
    });

    it("adds default_pipeline", () => {
      assert.ok(result.includes("default_pipeline: full"));
    });

    it("adds default_complexity", () => {
      assert.ok(result.includes("default_complexity: standard"));
    });

    it("adds max_rfc_rounds", () => {
      assert.ok(result.includes("max_rfc_rounds: 3"));
    });

    it("adds milestone_lock_timeout", () => {
      assert.ok(result.includes("milestone_lock_timeout: 120"));
    });
  });

  describe("user values are preserved", () => {
    it("keeps user models.quick value", () => {
      assert.ok(result.includes("quick: haiku"));
    });

    it("keeps user rfc_approval", () => {
      assert.ok(result.includes("rfc_approval: skip"));
    });

    it("keeps user push_approval", () => {
      assert.ok(result.includes("push_approval: auto"));
    });

    it("keeps user re_review_lines", () => {
      assert.ok(result.includes("re_review_lines: 50"));
    });

    it("keeps user phase_time_limit", () => {
      assert.ok(result.includes("phase_time_limit: 20"));
    });

    it("keeps user stuck_retry_limit", () => {
      assert.ok(result.includes("stuck_retry_limit: 5"));
    });

    it("keeps user verification commands", () => {
      assert.ok(result.includes('typecheck: "yarn tsc --noEmit"'));
      assert.ok(result.includes('test: "yarn test"'));
      assert.ok(result.includes('lint: "yarn lint"'));
    });
  });

  describe("template structure is preserved", () => {
    it("keeps comments from template", () => {
      assert.ok(result.includes("# Orchestra Configuration"));
      assert.ok(result.includes("# Model selection per phase complexity"));
    });

    it("maintains section order", () => {
      const pipelineIdx = result.indexOf("pipeline:");
      const thresholdsIdx = result.indexOf("thresholds:");
      const verificationIdx = result.indexOf("verification:");
      assert.ok(pipelineIdx < thresholdsIdx);
      assert.ok(thresholdsIdx < verificationIdx);
    });
  });
});
