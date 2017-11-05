/**
 * Created by web-01 on 2017/11/2.
 */
const fs = require('fs');
var fname = './public/mydata.txt';
// var fd = fs.openSync(fname, 'r');
// var buf = Buffer.alloc(10);
// var bytesRead = fs.readSync(fd, buf, 0, 5, 0);
// console.log(bytesRead);
//
// var bytesRead = fs.readSync(fd, buf, 5, 5, fs.statSync(fname).size - 5);
// console.log("实际读到的字节数:" + bytesRead);
// console.log(buf.toString());
//
// fs.closeSync(fd);

//异步读取
fs.open(fname, 'r', (err, fd) => {
    if (err) throw err;

    var buf = Buffer.alloc(10);
    fs.read(fd, buf, 0, 5, 0, (err,bytesRead,bf) => {
        if (err) throw err;
        console.log('实际读取的字节数' + bytesRead);
        console.log(buf);
        console.log(bf);
        console.log(buf == bf);
        fs.stat(fname,(err,stats)=>{
            fs.read(fd,buf,5,5,stats.size-5,(err,bytesRead,bf)=>{
                console.log('实际读取的字节数' + bytesRead);
                console.log(buf.toString());
                fs.close(fd,()=>{
                    console.log('文件正常关闭');
                });
            });
        });

    });

});

console.log('脚本执行完成');