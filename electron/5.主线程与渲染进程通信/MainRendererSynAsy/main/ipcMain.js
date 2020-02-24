//主进程 处理渲染进程广播的数据

var { ipcMain} =require('electron');

//接收广播的数据
ipcMain.on('sendM',function(event,data){
    console.log(data);
    console.log(event);

})



//接收广播 并且返回处理结果

ipcMain.on('sendreplay',function(event,data){
    console.log(data);
    // console.log(event);

    //主进程给渲染进程广播数据

    event.sender.send('replay','ok  haha');

})








//接收同步
ipcMain.on('sendresync',function(event,data){
    console.log(data);
    //给渲染进程返回数据

    event.returnValue='this is  sync  main';

})


