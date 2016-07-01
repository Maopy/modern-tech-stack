# 目录结构

> 本系列文档描述的全部代码与本项目代码完全对应

```
src 开发目录，存放源代码
|- server Node端代码
|- client 浏览器端代码
dist 产出文件存放目录
|- server
|- client
test 测试文件存放目录
webpack Webpack配置文件存放目录
```

至此，一个基本的目录结构就已经建好了。随着后面加入新的框架或工具，目录结构将进一步细化。

# Webpack配置

首先，在我们的项目中引入`Webpack2`，目前Webpack2还没有发布正式版。不过，绝大多数功能已经趋于稳定，已经可以开始使用了。

```sh
  $ npm install webpack@2.1.0-beta.15 -D
```

同时，我们引入`Babel`编译我们的代码。这样就可以在Node端和浏览器端编写同样新潮的代码了。

```sh
  $ npm install babel-core -D
```

接下来在webpack路径内创建webpack的配置文件

```
webpack
|- paths.js 配置一些常用目录
|- webpack.config.dev.babel.js 开发时配置
|- webpack.config.prod.babel.js 打包时配置
|- webpack.config.server.babel.js 打包服务端代码配置，与客户端可能执行时机不同
```

`.babel.js` 的扩展名会让babel来执行这段js，这样我们在webpack配置文件里面也可以写ES6/7的代码了。
