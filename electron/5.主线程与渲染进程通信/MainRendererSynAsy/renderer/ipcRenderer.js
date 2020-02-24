//让渲染进程给主进程发送消息  

var { ipcRenderer} =require('electron')


var sendDom=document.querySelector('#send');

//渲染进程执行主进程里面的方法
sendDom.onclick=function(){

    // alert('1213')
    //渲染进程给主进程广播数据
    ipcRenderer.send('sendM','this is  renderer');

}










// 渲染进程执行主进程里面的方法，主进程给渲染进程反馈处理结果 。

var sendreplayDom=document.querySelector('#sendreplay');
sendreplayDom.onclick=function(){

    // alert('1213')
    //渲染进程给主进程广播数据
    ipcRenderer.send('sendreplay','this is  renderer aaa');

}

//接收主进程广播的事件

ipcRenderer.on('replay',function(event,data){
    console.log(data);

})











//渲染进程和主进程通信 （同步）

var sendsyncDom=document.querySelector('#sendsync');
sendsyncDom.onclick=function(){

    //同步
    var msg=ipcRenderer.sendSync('sendresync','this is  renderer cccc');


    console.log(msg);
}
