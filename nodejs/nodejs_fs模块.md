1. fs.stat  检测是文件还是目录  fs.statSync()同步获取stats对象,通过返回值接收。

```
fs.stat('html',function(error,stats){
    if(error){
        console.log(error);
        return false;
    }
    console.log('文件：'+stats.isFile());
    console.log('目录：'+stats.isDirectory());
})

```

2. fs.mkdir  创建目录  

```
fs.mkdir('css',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('创建目录成功');
})
```

3. fs.writeFile  写入文件,会覆盖之前的内容,文件不存在就创建

```
fs.writeFile('123.txt','你好nodejs 覆盖','utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
```

4. fs.appendFile 追加文件 

```
fs.appendFile('123.txt','这是写入的内容\n',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
```

5. fs.readFile 读取文件 

```
fs.readFile('123.txt',function(error,data){
    if(error){
        console.log(error);
        return false;
    }
    //console.log(data);  //data是读取的十六进制的数据。  也可以在参数中加入编码格式"utf8"来解决十六进制的问题;
    console.log(data.toString());  //读取出所有行的信息  
})
```

6. fs.readdir 读取目录下第一级内容  把目录下面的文件和文件夹都获取到

```
fs.readdir('html',function(error,data){
    if(error){
        console.log(error);
        return false;
    }
    console.log(data);  //data是数组类型，包含文件夹以及文件的名字(只有第一级目录内容)。拿到一个文件夹下面的所有目录  
})
```

7. fs.rename 重命名 

```
fs.rename('html/index.html','html/news.html',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('修改成功');
})
```

8. fs.rmdir  删除目录   rmdir 这个方法只能删除目录，不能删除文件 

```
fs.rmdir('abc目录',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('删除目录成功');
})
```

9. fs.unlink删除文件 

```
fs.unlink('index.txt',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('删除文件成功');
})
```

