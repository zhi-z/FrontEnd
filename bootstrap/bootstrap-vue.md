# 1.引入jquery

1. 安装jquery

```
$ npm install jquery --save-dev
```

2.在webpack.config.js 添加内容

```
+ const webpack = require("webpack");
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js'
    },

  + plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ]
}
```

3.在入口文件index.js 里面添加内容

```
import $ from 'jquery' ;
```

4.测试一下是否安装成功，看看能否弹出'123'

```
<template>
  <div>
   Hello world！
  </div>
</template>

<script>
$(function () {  
    alert(123);  
 }); 

export default {
  
};
</script>

<style>

</style>
```

 

# 2.引入Bootstrap

1.安装Bootstrap

```
$ npm install --save-dev bootstrap
```

2.在入口文件index.js里引入相关

```
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
```

3.添加一段Bootstrap代码

```
    <div class="btn-group" role="group" aria-label="...">  
      <button type="button" class="btn btn-default">Left</button>  
      <button type="button" class="btn btn-default">Middle</button>  
      <button type="button" class="btn btn-default">Right</button>  
    </div> 
```

4.运行，查看效果  这些按钮已经变成Bootstrap按钮组了

![img](https://images2017.cnblogs.com/blog/1251970/201712/1251970-20171223185208896-483834107.png)