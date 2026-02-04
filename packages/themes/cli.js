#!/usr/bin/env node

import fs from "fs"
import path from "path"
import prompts from "prompts"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const THEMES_DIR = path.join(__dirname, "tokens")

const DEFAULT_DIR = "src/styles"

const run = async () => {
  console.log("\n🐉 Balerion - 🎨 Design System : 🍣 Theme Token Installer \n")

  const files = fs.readdirSync(THEMES_DIR)
    .filter(f => f.endsWith(".css"))

  if (files.length === 0) {
    console.log("❌ No theme files found in /tokens")
    process.exit(1)
  }

  const { theme } = await prompts({
    type: "select",
    name: "theme",
    message: "Select a theme",
    choices: files.map(f => ({
      title: f.replace(".css", ""),
      value: f
    }))
  })

   if (!theme) {
    console.log("❌ Cancelled")
    process.exit(0)
  }

  const { dir } = await prompts({
    type: "text",
    name: "dir",
    message: "Where should the theme be installed?",
    initial: DEFAULT_DIR
  })


  const targetDir = path.resolve(process.cwd(), dir)
  const targetFile = path.join(targetDir, theme)

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  if (fs.existsSync(targetFile)) {
    console.log(`⚠ ${theme} already exists at ${dir}`)
    process.exit(0)
  }

  fs.copyFileSync(
    path.join(THEMES_DIR, theme),
    targetFile
  )

  console.log(`\n✔ Installed ${theme}`)
  console.log(`📁 ${targetFile}`)
  console.log("\n✨ Done!\n")

}

run()