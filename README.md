# Phaser3 库文件定制化生成项目

本项目用于生成更精简的自定义组件 Phaser3 库文件，以用于使用 ES5 编写的 Phaser3 项目。

## 怎样使用

1. 克隆本项目到 `git clone https://github.com/MarsGT/phaser3-custom-build.git`
2. 进入项目根目录，使用 `npm i` 安装依赖包
3. 使用命令 `npm run buildkoi` 即可开始编译，编译后的生成文件在 dist-koi 目录

## 备注

- 库的配置在根目录下的 phaser-koi-custom.js 文件里
- 如需调整配置(如 require 哪些内容)，可参考 phaser3 引用包里、各个目录下的 index.js，也可参考本项目 Fork 的原始项目，即 [phaser3-custom-build](https://github.com/photonstorm/phaser3-custom-build)
