# webpackwork

这是将点赞插件和全景图两个页面在两个路由上跑起来。

node作为服务端，使用了koa框架，webpack分别打包压缩这两个页面的js并且插入页面，

注意因为使用了swig模版，所以在使用webpack时，如何将与页面对应的静态资源精确打包到html的模版中是个棘手的问题，要熟悉html-webpack-plugin插件的特性，

也要巧用chunks把output出的静态资源文件插入到html模版的对应位置里。

运行步骤：

1、克隆代码

2、命令行输入npm install

3、进入build/nodeuii

4、命令行输入node app.js


