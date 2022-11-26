#!/usr/bin/env node
import figlet from "figlet"
import chalk from "chalk"
import { frontendHandler } from "./handlers/frontend"
import { next } from "./handlers/next-app/next"
import { backendHandler } from "./handlers/backend"
import { express } from "./handlers/express-app/express"
import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import { createContext } from "./macros/context/createContext"
import { getLocation } from "./helpers/getLocation"
const argv = yargs(hideBin(process.argv)).argv

async function main() {

  console.log(chalk.blue(figlet.textSync("CJA", { horizontalLayout: 'full', font: "3D-ASCII" })))

  if (argv["_"]?.[0] == "init" || !argv["_"]?.[0]) {
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

  else {
    switch (argv["_"]?.[0]) {
      case "context":
        // @ts-ignore
        createContext(argv?.location || getLocation())
    }
  }

}

main()
