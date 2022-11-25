import { execSync } from "child_process"
import makeDir, { sync as makeDirSync } from "make-dir"
import { deleteSync } from "del"
import write from "write"
import { createPackageJson } from "../../files/packageJson"
import { createFolderStructure } from "../../helpers/createFolderStructure"
import { createTsConfig } from "../../files/tsConfig"
import { createFile } from "../../files/file"

export async function next(location: string) {

  createFolderStructure(location, {
    "src": {
      "components": {},
      "hooks": {},
      "contexts": {},
      "styles": {},
      "types": {}
    },
    "public": {},
    "pages": {}
  })
  createPackageJson(location, "next-app", 
  { 
    "next": "12.1.6",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "sass": "^1.52.2", 
  }, {
    "@types/node": "^17.0.40",
    "@types/react": "18.0.9",
    "@types/react-dom": "18.0.3",
    "eslint": "8.15.0",
    "eslint-config-next": "12.1.6",
    "eslint-config-prettier": "^8.5.0",
    "typescript": "4.6.4"
  }, {
    dev: "next dev",
    build: "next build",
    start: "next start",
  })
  createTsConfig(location, {
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
    "include": ["next-env.d.ts", "**/*.ts*"],
    "exclude": ["node_modules"]
  })
  createFile(`${location}/pages`, "index.tsx", `export default function Home() {
    return <>hello world</>
  }
  `)
  createFile(`${location}/pages`, "_app.tsx", `import '../src/styles/globals.scss'
  import type { AppProps } from 'next/app'
  
  export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }
  `)
  createFile(`${location}`, "README.md", `his project was bootstrapped with create-julien-app`)
  createFile(`${location}`, "next.config.js", `/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig
  `)
  createFile(`${location}/src/styles`, "globals.scss", `html,
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
  `)
  createFile(`${location}`, "next-env.d.ts", `/// <reference types="next" />
  /// <reference types="next/image-types/global" />
  
  // NOTE: This file should not be edited
  // see https://nextjs.org/docs/basic-features/typescript for more information.
  `)
  createFile(`${location}`, ".gitignore", `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

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
  `)
  createFile(`${location}`, ".eslintrc.json", `{
    "extends": "next/core-web-vitals"
  }
  `)
  createFile(`${location}`, ".env.local", "")
  execSync("npm i", { stdio: 'inherit', cwd: location })
}