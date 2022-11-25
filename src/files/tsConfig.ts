import write from "write"

export function createTsConfig(location: string, config: Object) {
  const tsConfig = JSON.stringify(config, null, 2)
  write.sync(`${location}/tsconfig.json`, tsConfig)
}