//创建菜单
/*

var electron=require('electron');

var Menu=electron.Menu;

vscode里面实现代码提示功能：
    在当前项目安装一下  electron模块。

      "dependencies": {
        "electron": "^2.0.4"
    }


https://electronjs.org/docs/api/menu-item
*/

const { Menu }=require('electron');


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

                label:'复制',
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
