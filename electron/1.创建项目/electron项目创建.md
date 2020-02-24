# electron项目创建

## 1.通过electron-forge

### 1.1 全局安装 electron-forge

只需要安装一次:

```
npm install -g electron-forge    /  cnpm install -g electron-forge  
```

### 1.2 创建项目

```
electron-forge init my-new-app
```

注意：这一步会默认安装模块 ，如果失败删掉node_modules，重新cd到项目里面运行 cnpm install  或者yarn

### 1.3 启动项目

```
cd my-new-app
npm start
```

## 2.通过electron手动创建创建项目

```
1.新建一个文件夹 （文件夹不能是中文）

2.新建一个index.html  和一个main.js

3.npm init --yes生成一个package.json    配置项目的元数据  

注意的是package.json里面配置的 main 必须是入口js（主进程）

4.electron . 运行项目
```

