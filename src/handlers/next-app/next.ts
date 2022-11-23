import { execSync } from "child_process"
import makeDir, { sync as makeDirSync } from "make-dir"
import { deleteSync } from "del"
import write from "write"

export async function next(location: string) {
  makeDirSync(location)
  write.sync(`${location}/pages/index.tsx`, indexFile)
  write.sync(`${location}/pages/_app.tsx`, appFile)
  makeDirSync(`${location}/public`)
  write.sync(`${location}/src/styles/globals.scss`, defaultCss)
  makeDirSync(`${location}/src/components`)
  makeDirSync(`${location}/src/hooks`)
  makeDirSync(`${location}/src/types`)
  makeDirSync(`${location}/src/contexts`)
  write.sync(`${location}/.eslintrc.json`, eslint)
  write.sync(`${location}/.gitignore`, gitIgnore)
  write.sync(`${location}/next-env.d.ts`, nextEnv)
  write.sync(`${location}/next.config.js`, nextConfig)
  write.sync(`${location}/package.json`, packageJson)
  write.sync(`${location}/tsconfig.json`, tsConfig)
  write.sync(`${location}/README.md`, readme)
  execSync("npm i", { stdio: 'inherit', cwd: location })
}

const readme = `this project was bootstrapped with create-julien-app`

const tsConfig = `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`

const packageJson = `{
  "name": "test",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.0.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "eslint": "8.28.0",
    "eslint-config-next": "13.0.5",
    "@types/node": "18.11.9",
    "@types/react": "18.0.25",
    "@types/react-dom": "18.0.9",
    "sass": "^1.52.2",
    "typescript": "4.9.3"
  }
}`

const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig`

const nextEnv = `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
`

const gitIgnore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`

const eslint = `{
  "extends": "next/core-web-vitals"
}`

const defaultCss = `html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
`

const indexFile = `export default function Home() {
  return <>hello world</>
}
`

const appFile = `import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
`