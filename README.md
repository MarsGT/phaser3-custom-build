# Phaser 3 引用库自定义编写模板

本项目用于生成更精简的自定义组件 Phaser 3 库文件，以用于使用 ES5 编写的 Phaser 3 项目。

## 快速开始

1. 克隆本项目到 `git clone https://github.com/MarsGT/phaser3-custom-build.git`
2. 进入项目根目录，使用 `npm i` 安装依赖包
3. 使用命令 `npm run build` 即可开始编译，编译后的生成文件在 dist 目录（只有一个例外，使用 `npm run buildkoi` 命令将输出到 dist-koi 目录）

## 备注

- 完整的命令列表可以参考根目录下的 `package.json` 文件
- 库的配置在根目录下以 phaser 开头的 js 文件里。具体可以 require 哪些，可以去 phaser 3 源文件里、各个目录的 index.js 里找
