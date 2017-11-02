/**
 * Created by web-01 on 2017/11/2.
 */
const fs=require('lesson5/fs');
var data=Buffer.from('abc衣蛾规范规定');
var fname='./public/data.txt';

//fs.writeFileSync(fname,data);//同步
//console.log('文件内容输出完成');

fs.writeFile(fname,data,(err)=>{
    if(err) throw err;
    else console.log('文件内容输出完成');
});



console.log('脚本执行完成');