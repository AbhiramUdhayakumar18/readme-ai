# 🚀 Readme-AI

> Automatically generate professional, clean, and GitHub-ready README files using AI.

---

## ✨ Overview

**Readme-AI** is a powerful CLI tool that analyzes your project codebase and generates a well-structured `README.md` using AI.

It eliminates the need to manually write documentation and ensures every project has a polished, consistent README.

---

## 🔥 Features

- 📂 **Recursive File Scanning** – Reads entire project structure
- 🌐 **Language Agnostic** – Works with any programming language
- 🤖 **AI-Powered Generation** – Uses Gemini CLI for intelligent output
- ⚡ **Fast CLI Workflow** – Generate README in seconds
- 🧠 **Context-Aware** – Understands project structure and purpose
- 🧹 **Smart Filtering** – Ignores unnecessary files (node_modules, build, etc.)

---

## 🚀 Usage

Navigate to any project folder and run : readme-ai generate. (in the command prompt)

👉 A professional `README.md` will be generated automatically.

---

## 🛠 Tech Stack

- Node.js
- Commander.js
- File System (fs)
- Gemini CLI

---

## ⚙️ How It Works

1. Scans your project directory recursively
2. Filters relevant files
3. Builds structured context
4. Sends context to Gemini CLI
5. Generates a polished README

---

## ⚠️ Requirements

- Node.js installed
- Gemini CLI installed and authenticated

---

## 🔐 Security & Privacy

- No API keys stored in the project
- No credentials exposed in code
- All AI processing is handled locally via CLI

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/readme-ai.git

# Navigate into the project
cd readme-ai

# Install dependencies
npm install

# Link globally
npm link
```