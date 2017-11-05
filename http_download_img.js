/**
 * Created by web-01 on 2017/11/5.
 */
const http=require('http');
const fs=require('fs');

let options={
    host:'www.baidu.com',
    path:'/img/bd_logo1.png'
};

let request=http.request(options,(res)=>{

    res.on("data",(buffer)=>{
        fs.writeFile(__dirname+"/img/bd.png",buffer,(err)=>{
            if(err) throw err;
            console.log("download");
        });
    });
});

request.end();