目前企业中搭建 monorepo 工程常见的方案中 3 种：

- lerna
- yarn + workspace
- pnpm + workspace

pnpm 中内置了 workspace ，所以渐渐成为主流。

workspace 翻译成中文是「工作区」：

- 组织和管理项目文件：工作区提供一个用于存储和组织项目文件的结构，这种结构通常包含源代码、配置文件、测试文件和其它与项目相关的资源；
- 跨项目共享设置和工具：工作区允许开发者在多个项目之间共享设置、依赖和工具，有助于保持项目的一致性，减少不同项目之间切换的开销；
- 支持协同开发：工作区有助于团队成员协同开发多个项目。团队成员可以在同一工作区中访问和修改项目文件，从而提高协同开发的效率；

```shell
# 初始化 monorepo 空项目
mkdir my-project && cd my-project
pnpm init
mkdir packages
echo "packages:\n  # packages/ 下所有子包\n  - \"packages/*\"" > pnpm-workspace.yaml

# 初始化子项目
cd packages
mkdir example && cd example
pnpm init
pnpm add typescript -D -w # -w 表示在当前工作区中安装依赖
```

```shell
# 在子项目中安装其它子项目: 在 tool-project 中安装 tools
pnpm add tools -w --filter tools-project
```
