import { execSync } from "child_process"
import makeDir, { sync as makeDirSync } from "make-dir"
import { deleteSync } from "del"
import write from "write"

export async function express(location: string) {
  makeDirSync(location)
  
  execSync("npm i", { stdio: 'inherit', cwd: location })
}