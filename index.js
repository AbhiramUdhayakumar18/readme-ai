#!/usr/bin/env node

import { program } from "commander";
import { generateReadme } from "./analyzer.js";

program
  .command("generate")
  .option("--style <type>", "Style of README (modern, minimal, detailed)", "modern")
  .action((options) => {
    console.log("Analyzing project...");
    generateReadme(options.style);
  });

program.parse();