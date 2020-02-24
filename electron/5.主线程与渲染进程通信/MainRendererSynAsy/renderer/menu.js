//创建菜单
/*
vscode里面实现代码提示功能：
    在当前项目安装一下  electron模块。

    "dependencies": {
        "electron": "^2.0.4"
    }


https://electronjs.org/docs/api/menu-item
*/

var remote=require('electron').remote;

const Menu=remote.Menu;


//定义菜单
var template=[
    {

        label:'文件',
        submenu:[
            {

                label:'新建文件',

                accelerator:'ctrl+n',

                click:function(){ 
                    console.log('ctrl+n');
                }
            },
            {

                label:'新建窗口',
                click:function(){ 

                    console.log('new window');
                }
            }
        ]
    },
    {

        label:'编辑',
        submenu:[

            {

                label:'复制11',
                role:'copy'
            },
            {

                label:'截切',
                role:'cut'
            }
        ]
    }


]



var m=Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);


//右键菜单

window.addEventListener('contextmenu',function(e){

    // alert('1212')

    //阻止当前窗口默认事件
    e.preventDefault();

    //在当前窗口点击右键的时候弹出  定义的菜单模板
    m.popup({window:remote.getCurrentWindow()})



},false)