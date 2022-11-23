import inquirer from "inquirer";

export async function backendHandler() {
  const backEnd = await inquirer.prompt({
    name: "value",
    type: "confirm",
    message: "Do you need a backend?"
  })
  if (!backEnd.value) {
    return undefined
  }
  const dataBase = await inquirer.prompt({
    name: "value",
    type: "confirm",
    message: "Do you need a database?",
  })
  let db = ""
  if (dataBase) {
    const dataBaseInput = await inquirer.prompt({
      name: "value",
      type: "list",
      message: "What database do you want to use?",
      choices: [
        {
          name: "Postgres (with Prisma)",
          value: "Postgres"
        },
        // {
        //   name: "React.js",
        //   value: "React.js"
        // }
      ]
    })
    db = dataBaseInput.value
  }
  const folderName = await inquirer.prompt({
    name: "value",
    type: "input",
    message: "Folder name? (put . to save in current folder)"
  })

  return { dataBase: db || undefined, location: folderName.value }
}