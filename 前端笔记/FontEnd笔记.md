# FontEnd笔记

## 1. HTML

1) HTML DOM selectedIndex 属性，

语法：

```
selectObject.selectedIndex=number
```

例如：

```
var x=document.getElementById("mySelect")
alert(x.selectedIndex)
```

2) [HTML DOM Event 对象](http://www.w3school.com.cn/jsref/dom_obj_event.asp)

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。

事件通常与函数结合使用，函数不会在事件发生前被执行！

## 2.CSS



## 3.JS

-[jQuery的对象访问函数(get,index,size,each)](https://www.cnblogs.com/qlqwjy/p/7779155.html)

- trigger() 方法触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。

- jQuery中val()方法用法:

  ```
  只有具有value属性的元素才能够使用此方法。比如input元素可以使用此方法，而div元素就不可以。
  ```

- attr() 方法设置或返回被选元素的属性值

```
$("button").click(function(){
  $("img").attr("width","180");
});
```

1) JS之clientX,clientY,screenX,screenY,offsetX,offsetY区别测试,鼠标位置

