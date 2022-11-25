import write from "write"

export function createPackageJson(location: string, name: string, dependencies: Object, devDependencies: Object, scripts: Object) {
  const packageJson = JSON.stringify({
    "name": name,
    "version": "1.0.0",
    "description": "",
    "scripts": scripts,
    "dependencies": dependencies,
    "devDependencies": devDependencies
  }, null, 2)
  write.sync(`${location}/package.json`, packageJson)
}