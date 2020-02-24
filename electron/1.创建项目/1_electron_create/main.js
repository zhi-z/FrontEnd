// 主进程

// 引入electron模块
var electron =require('electron');

// electron引用
const app = electron.app

// 创建electron BrowerWindow 引用
const BrowserWindow = electron.BrowserWindow;

// 变量 保存对应窗口的引用
var mainWin = null;

app.on('ready',()=>{
    // 创建BrowserWindow,并设置窗口的宽高
    mainWin = new BrowserWindow({
        width:800,
        height:460
    });

    // 把index加载到窗口里面
    mainWin.loadFile('index.html');

    mainWin.on('closed',()=>{
        mainWin = null
    });
});