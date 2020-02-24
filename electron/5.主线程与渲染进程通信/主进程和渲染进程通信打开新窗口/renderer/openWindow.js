var {ipcRenderer} =require('electron');



var btn=document.querySelector('#btn');

//渲染进程没法直接调用主进程中的模块，但是我们可以通过 electron中的remote模块间接的调用主进程中的模块


btn.onclick=function(){
    // alert('点击了');


    ipcRenderer.send('openWindow');
}