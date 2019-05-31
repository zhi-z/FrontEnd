##  VUE启动流程

### 1. package.json

在执行npm run dev的时候，会在当前目录中寻找 package.json 文件, 有点类似 Maven 的 pom.xml 文件，包含项目的名称版本、项目依赖等相关信息。

```
{　# 版本信息
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "kitty ui project",
  "author": "Louis",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  "dependencies": { # 项目依赖
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
  },
  "devDependencies": {  # 项目依赖
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1","vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {　　# node、npm版本要求
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

### 2. webpack.dev.conf.js

从下图中可以看到， 启动 npm run dev 命令后，会加载 build/webpack.dev.conf.js 配置并启动 webpack-dev-server 。

![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817144307679-525629868.png)

### 3.  config/*.js

 webpack.dev.conf.js 中引入了很多模块的内容，其中就包括 config 目录下服务器环境的配置文件。

![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817144812448-1629632495.png)

### 4.  config/index.js

可以看到，在 index.js 文件中包含服务器 host 和 port 以及入口文件的相关配置，默认启动端口是8080，这里可以进行修改。

 ![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817145202440-43744659.png)

### 5.  index.html

index.html 的内容很简单，主要是提供一个 div 给 vue 挂载。

![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817145901723-13870345.png)

### 6.  main.js

main.js 中， 引入了 vue、App 和 router 模块， 创建了一个 Vue 对象，并把 App.vue 模板的内容挂载到 index.html 的 id 为 app 的 div 标签下， 并绑定了一个路由配置。

![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817150042270-2122432032.png)

### 7.  App.vue

上面 main.js 把 App.vue 模板的内容，放置在了 index.html 的 div 标签下面。查看 App.vue 的内容我们看到，这个页面的内容由一个 logo 和一个待放置内容的 router-view，router-view 的内容将由 router 配置决定。

 ![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817150854394-1589320118.png)

### 8.  index.js

查看 route 目录下的 index.js，我们发现这里配置了一个路由， 在访问路径 / 的时候， 会把 HelloWorld 模板的内容放置到上面的 router-view中。 

![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817150719908-691961374.png)

### 9.  HelloWorld.vue

HelloWorld 中主要是一些 Vue 介绍显示内容。

 ![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817151606262-1530914525.png)

### 10. 页面组成

所以，页面关系组成是 index.html 包含 App.vue，App.vue 包含 HelloWorld.vue 。

 ![img](https://images2018.cnblogs.com/blog/616891/201808/616891-20180817152758723-1616261363.png)

### 转载

<https://www.cnblogs.com/xifengxiaoma/p/9493544.html>