import inquirer from "inquirer";

export async function frontendHandler() {
  const frontEnd = await inquirer.prompt({
    name: "value",
    type: "confirm",
    message: "Do you need a frontend?"
  })
  if (!frontEnd.value) {
    return undefined
  }
  const frameWork = await inquirer.prompt({
    name: "value",
    type: "list",
    message: "What framework do you want to use?",
    choices: [
      {
        name: "Next.js",
        value: "Next.js"
      },
      {
        name: "React.js",
        value: "React.js"
      }
    ]
  })
  const folderName = await inquirer.prompt({
    name: "value",
    type: "input",
    message: "Where should the frontend be saved?"
  })

  return { frameWork: frameWork.value, location: folderName.value }
}