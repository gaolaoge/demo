```shell
# 安装依赖
pnpm add typescript tsc ts-node @types/node -D
pnpm add jest jest-environment-jsdom ts-jest @types/jest -D

# 生成 jest 配置文件，并修改配置 preset: "ts-jest",
npx jest --init

# 生成 ts 配置文件
npx tsc --init
```

修改 tsconfig.json :

- "compilerOptions.target": "es6",
- "compilerOptions.esModuleInterop": true,
- "compilerOptions.declaration": true, 声明类型文件
- "compilerOptions.declarationDir": "./dist/types", 声明类型文件位置
- "include": ["./src"]

打包：使用 rollup ，会打包成 3 个格式（commonJS Broswer ESM）。

```shell
pnpm add rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-typescript2 @rollup/plugin-json @rollup/plugin-babel @babel/preset-env -D -w
```

生成 rollup.config.js

```js
// rollup.config.js
import typescript from "@rollup/plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";

const extensions = [".ts", ".tsx"];

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs.js",
      format: "cjs"
    },
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true
      }),
      resolve({ extensions }),
      commonjs(),
      json()
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "es"
    },
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true
      }),
      resolve({ extensions }),
      json()
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.browser.js",
      format: "iife",
      name: "jsTools"
    },
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true
      }),
      resolve({ extensions }),
      commonjs(),
      json(),
      babel({
        exclude: "node_modules/**",
        extensions,
        babelHelpers: "bundled",
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead"
            }
          ]
        ]
      })
    ]
  }
];
```
