import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from 'rollup-plugin-peer-deps-external'
import typescript from "@rollup/plugin-typescript"
import shebang from "rollup-plugin-preserve-shebang"
// import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import replace from "rollup-plugin-re"
import globals from "rollup-plugin-node-globals"



export default [
  {
    input: "src/index.ts",
    output: {
      dir: "bin",
      format: "cjs",
      sourcemap: false,
    },
    cache: true,
    plugins: [
      shebang(),
      resolve({ preferBuiltins: true, sourcemap: false }),
      // external(),
      json(),
      replace({
        patterns: [
          {
            // regexp match with resolved path
            match: /formidable(\/|\\)lib/, 
            // string or regexp
            test: 'if (global.GENTLY) require = GENTLY.hijack(require);', 
            // string or function to replaced with
            replace: '',
          }
        ]
      }),
      commonjs({ sourceMap: false }),
      typescript({
        tsconfig: "./tsconfig.json"
      }),
      babel({ babelHelpers: 'bundled', exclude: ["/node_modules"] }),
      // globals(),
    ]
  }
]