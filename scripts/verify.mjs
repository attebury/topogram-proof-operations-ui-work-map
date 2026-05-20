import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const topogram = path.join(root, "node_modules", ".bin", "topogram");

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
    shell: false,
    ...options
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with status ${result.status}`);
  }
}

run("node", ["./scripts/check-paths.mjs"]);
run("node", ["./scripts/proof-audit.mjs"]);
run(topogram, ["check", ".", "--json"]);
run(topogram, ["sdlc", "check", ".", "--strict"]);
run(topogram, ["agent", "brief", ".", "--json"]);
run(topogram, ["sdlc", "prep", "commit", ".", "--json"]);

const status = spawnSync("git", ["status", "--short"], { cwd: root, encoding: "utf8" });
if (status.status !== 0) throw new Error("git status failed");
if (status.stdout.trim()) {
  console.error(status.stdout);
  throw new Error("Working tree must be clean after proof verification.");
}

console.log("Proof verification passed.");
