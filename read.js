/**
 * Created by web-01 on 2017/11/5.
 */
const fs=require('fs');

fs.open(__dirname+'/public/mydata.txt',"r",(err,fd)=>{
    console.log(fd);
    if(err) throw err;
    let buffer=Buffer.alloc(2);
    fs.read(fd,buffer,0,2,1,(err,bytesRead,buffer)=>{
        if(err) throw err;
        console.log(bytesRead,buffer.toString());
        fs.close(fd);
    })
});