import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { buildPrompt } from "./prompt.js";

const ignoredFolders = ["node_modules", ".git", "dist", "build"];

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (ignoredFolders.some(folder => fullPath.includes(folder))) {
      return;
    }

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });

  return results;
}

export function generateReadme() {
  const files = getAllFiles(process.cwd());

  let projectData = "";

  files.forEach(file => {
    try {

      const content = fs.readFileSync(file, "utf-8");

      const trimmedContent = content.slice(0, 2000);

      projectData += `\nFILE: ${file}\n${trimmedContent}\n`;
    } catch (err) {
    }
  });

  const prompt = buildPrompt(projectData);

  console.log("Generating README using Gemini...");

  fs.writeFileSync("prompt.txt", prompt);

  const result = execSync(`type prompt.txt | gemini`).toString();

  fs.writeFileSync("README.md", result);

  console.log("README.md created 🚀");
}
