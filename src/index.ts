#!/usr/bin/env node

import inquirer from "inquirer"
import { createSpinner } from "nanospinner"
import figlet from "figlet"
import chalk from "chalk"
import { frontendHandler } from "./handlers/frontend"
import { execSync } from "child_process"
import makeDir from "make-dir"
import { next } from "./handlers/next-app/next"
import { backendHandler } from "./handlers/backend"
import { express } from "./handlers/express-app/express"

async function main() {

  console.log(chalk.blue(figlet.textSync("CJA", { horizontalLayout: 'full', font: "3D-ASCII" })))

  const frontEnd = await frontendHandler()
  const backEnd = await backendHandler()

  if (frontEnd) {
    if (frontEnd.frameWork == "Next.js") {
      await next(frontEnd.location)
    }
  }
  if (backEnd) {
    await express(backEnd.location)
  }
}

main()
