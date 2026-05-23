/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

// Read .env or .env.local file
const envFiles = [".env", ".env.local", ".env.development", ".env.production"];
let port = "3000"; // default port

for (const file of envFiles) {
  const envPath = path.join(__dirname, file);
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    const portMatch = envContent.match(/^PORT\s*=\s*(\d+)/m);
    if (portMatch) {
      port = portMatch[1];
      break; // Use the first found PORT definition
    }
  }
}

const command = process.argv[2] || "dev";

console.log(`> Loading PORT environment variable from .env file...`);
console.log(`> Spawning "next ${command}" on port ${port}...`);

// Spawn next command cross-platform (windows & unix compatible)
const child = spawn("npx", ["next", command, "-p", port], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, PORT: port },
});

child.on("close", (code) => {
  process.exit(code ?? 0);
});
