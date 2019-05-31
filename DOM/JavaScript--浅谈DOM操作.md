# JavaScript--浅谈DOM操作

## 1.理解DOM

　　DOM（Document Object Model ，文档对象模型）一种独立于语言，用于操作xml，html文档的应用编程接口。

怎么说，我从两个角度理解：

- 对于JavaScript，为了能够使JavaScript操作Html，JavaScript就有了一套自己的dom编程接口。
- 对于Html，dom使得html形成一棵dom树，类似于一颗家族树一样，一层接一层，子子孙孙。

　　所以说，有了DOM，在我看来就是相当于JavaScript拿到了钥匙一样可以去操作Html的每一个节点，触摸Html每寸肌肤。

## 2.介绍Html的DOM树

说明：html标签通过浏览器的解析后才会形成dom树，此后HTML中的每个标签元素，属性，文本都能看做是一个DOM的节点，JavaScript都能通过dom的提供的编程接口操作到每个节点，去了解浏览器的渲染机制能够帮助我们了解dom。

Html代码：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>dom</title>
</head>
<body>
    <div>
        <a href="www.baidu.com">百度</a>
    </div>
</body>
</html>
```

对应的DOM树结构图：

![img](assets/dom_tree.png)

## 3.认识JavaScript中的DOM编程接口

上面说了html形成的dom树，接着说下通过js的dom编程接口去操作这棵dom树。

JavaScriptDOM操作的常用方法和属性：:

- **常用方法:**

1) 获取节点：

```
document.getElementById(idName)          //通过id号来获取元素，返回一个元素对象
document.getElementsByName(name)       //通过name属性获取id号，返回元素对象数组
document.getElementsByClassName(className)   //通过class来获取元素，返回元素对象数组（ie8以上才有）
document.getElementsByTagName(tagName)       //通过标签名获取元素，返回元素对象数组
```

2) 获取/设置元素的属性值：

```
element.getAttribute(attributeName)     //括号传入属性名，返回对应属性的属性值
element.setAttribute(attributeName,attributeValue)    //传入属性名及设置的值
```

3) 创建节点Node：

```
document.createElement("h3")       //创建一个html元素，这里以创建h3元素为例
document.createTextNode(String); //创建一个文本节点；
document.createAttribute("class"); //创建一个属性节点，这里以创建class属性为例
```

4) 增添节点：

```
element.appendChild(Node);   //往element内部最后面添加一个节点，参数是节点类型
elelment.insertBefore(newNode,existingNode); //在element内部的中在existingNode前面插入newNode
```

5) 删除节点：

```
element.removeChild(Node)    //删除当前节点下指定的子节点，删除成功返回该被删除的节点，否则返回null
```

- **常用属性:**

1) 获取当前元素的父节点 ：

```
element.parentNode     //返回当前元素的父节点对象
```

2) 获取当前元素的子节点

```
element.chlidren        //返回当前元素所有子元素节点对象，只返回HTML节点
element.chilidNodes   //返回当前元素多有子节点，包括文本，HTML，属性节点。（回车也会当做一个节点）
element.firstChild      //返回当前元素的第一个子节点对象
element.lastChild       //返回当前元素的最后一个子节点对象
```

3) 获取当前元素的同级元素：

```
element.nextSibling          //返回当前元素的下一个同级元素 没有就返回null
element.previousSibling   //返回当前元素上一个同级元素 没有就返回null
```

4) 获取当前元素的文本：

```
element.innerHTML   //返回元素的所有文本，包括html代码
element.innerText     //返回当前元素的自身及子代所有文本值，只是文本内容，不包括html代码
```

5) 获取当前节点的节点类型

```
node.nodeType   //返回节点的类型,数字形式
```

6) 设置样式

```
element.style.color=“#eea”;      //设置元素的样式时使用style，这里以设置文字颜色为例。
```

## 4.总结

大家都会觉得用jQuery来操作dom会更加的方便且好用，因为jq对js的dom进行了封装，使得我们Write Less, Do More。但是我觉得还是要总结一下原生js的dom，从根本上了解js对dom的操作，只会有利而无害。

## 转载

- [JavaScript--浅谈DOM操作](https://www.cnblogs.com/Ry-yuan/p/6918155.html)