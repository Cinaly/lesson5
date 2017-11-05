/**
 * Created by web-01 on 2017/11/5.
 */
//https://nodejs.org/static/images/logo.svg
const https=require('https');
const fs=require('fs');

let options={
    host:'nodejs.org',
    path:'/static/images/logo.svg'
};

let request=https.request(options,(res)=>{

    res.on("data",(buffer)=>{
        res+=buffer;
    });
    res.on("end",(buffer)=>{
        fs.writeFile(__dirname+"/img/nodejs.svg",buffer,(err)=>{
            if(err) throw err;
            console.log("download");
        });
    });
});

request.end();