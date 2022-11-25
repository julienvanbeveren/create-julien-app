import { sync as makeDirSync } from "make-dir"

export function createFolderStructure(location: string, structure: Object) {
  const keys = Object.keys(structure)
  for (const key of keys) {
    makeDirSync(`${location}/${key}`)
    if (structure[key]) {
      createFolderStructure(`${location}/${key}`, structure[key])
    } 
  }
}