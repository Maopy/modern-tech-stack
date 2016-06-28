# 从 Node 开始

> 前两年人们说如果你没玩过Node那你可能不是一个合格的前端。那么现在来看，如果没玩过Node，那你肯定不是一个前端了。

------

Node在经历了0.x版本的缓慢进步之后，从4.x版本以来，已然变成了版本帝。最新的6.x版本已经支持了[96%的ES6特性](http://node.green/)。
而且在性能上也有巨大提升。可以说，Node是前端工程师走向全栈最适合的敲门砖。

## Node 里面的3个M

### NPM

在安装Node的时候，`npm`已经自动安装好了。也可以通过这种方式

来升级npm
```sh
  $ [sudo] npm install npm -g
```

安装一个依赖
```sh
  $ npm install [package] -S
```

安装一个开发依赖
```sh
  $ npm install [package] -D
```

### NVM

nvm 用来是Node的版本控制器。用它可以快速切换Node版本，方便调试。

[安装方法](https://github.com/creationix/nvm)

常用命令

查看当前安装的全部Node版本：
```sh
  $ nvm ls
```

安装某个版本：
```sh
  $ nvm install v4.4.5
```

使用某个版本：
```sh
  $ nvm use 4
```

### NRM

[nrm](https://github.com/Pana/nrm) 用来切换 npm 下载源。通常切换到国内的 cnpm 或者 taobao 这两个源。

常用命令

查看当前添加源
```sh
  $ nrm ls
```

测试全部源ping值
```sh
  $ nrm test
```

使用某个源
```sh
  $ nrm use taobao
```
