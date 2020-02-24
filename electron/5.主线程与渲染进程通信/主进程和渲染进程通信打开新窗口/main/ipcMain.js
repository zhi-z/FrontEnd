var {ipcMain,BrowserWindow} =require('electron');


var path=require('path');


var win=null;

//接收到广播
ipcMain.on('openWindow',function(){
    //调用 BrowserWindow打开新窗口
    win=new BrowserWindow({

        width:400,
        height:300,
        // frame:false,
        // fullscreen:true
    })
    win.loadURL(path.join('file:',__dirname,'../news.html'));
    
    win.webContents.openDevTools();

    win.on('closed',()=>{

        win=null;
    })


})