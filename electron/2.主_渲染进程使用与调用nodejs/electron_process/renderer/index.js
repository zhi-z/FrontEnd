
var fs=require('fs');

window.onload=function(){


    var btn=this.document.querySelector('#btn');
    var textarea=this.document.querySelector('#textarea');

    btn.onclick=function(){
        /*
        1.获取本地文件

        2、赋值给textarea
        */
       fs.readFile('package.json',(err,data)=>{

            // console.log(data);
            textarea.innerHTML=data;


       })


    }
}