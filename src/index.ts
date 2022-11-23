#!/usr/bin/env node

import inquirer from "inquirer"
import { createSpinner } from "nanospinner"
import figlet from "figlet"
import chalk from "chalk"
import { frontendHandler } from "./handlers/frontend"
import { execSync } from "child_process"
import makeDir from "make-dir"
import { next } from "./handlers/next-app/next"

async function main() {

  console.log(chalk.blue(figlet.textSync("CJA", { horizontalLayout: 'full', font: "3D-ASCII" })))

  const frontEnd = await frontendHandler()

  if (frontEnd) {
    if (frontEnd.frameWork == "Next.js") {
      await next(frontEnd.location)
    }
  }
}

main()
