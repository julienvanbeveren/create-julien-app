import inquirer from "inquirer";

export async function getLocation() {
  const location = await inquirer.prompt({
    name: "value",
    type: "input",
    message: "Folder name? (put . to save in current folder)"
  })
  return location.value
}