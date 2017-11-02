/**
 * Created by web-01 on 2017/11/2.
 */
const fs=require('lesson5/fs');
fs.readFile('./logo.png',(err,data)=>{
    if(err) console.log(err);
    else{
        var base64Str=data.toString('base64');
        console.log(base64Str);
    }
});