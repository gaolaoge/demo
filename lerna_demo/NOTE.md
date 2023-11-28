lerna 是一个多包管理工具，优化使用 git 和 npm 维护存储库的工作流。

它具有以下功能：

自动解决 packages 之间的依赖关系；
通过 git 检测文件改动，自动发布；
根据 git 提交记录，自动生成 CHANGELOG。

lerna 支持 2 种工作模式，分别是默认模式-Locked mode 和 Independent mode。
**默认模式-Locked mode**
每次发布，所有有改动的包自动更新版本号，所有包的版本一致，版本号维护在 lerna.json 的 version 中。
**独立模式-Independent mode**
每次发布时，将提示每个已更改的包，以及其建议的版本号，每个 package 都有自己的版本号。

设置方式：
`lerna init --independent`

或修改 lerna.json：
`version: "independent"`

全局安装：`npm install -g lerna`

使用：
`lerna publish`

`lerna version`

`lerna bootstrap`

`lerna add`

`lerna run`

`lerna clean`

`lerna exec`

`lerna ls`

`lerna changed`

`lerna diff`
