#目录结构

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

#Webpack配置

> 前端构建工具从Grunt到Gulp，依赖管理从Require到Sea，期间还面临jspm和rollup的挑战。Webpack最终淘汰了上述全部，坐上了霸主之位。不过webpack的配置却是一道很大的坎啊。。