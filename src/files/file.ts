import write from "write"

export function createFile(location: string, name: string, content: string) {
  write.sync(`${location}/${name}`, content)
}