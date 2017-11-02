/**
 * Created by web-01 on 2017/11/2.
 */
const fs=require('lesson5/fs');
const os=require('os');
var data=Buffer.from('888'+os.EOL);
var fname='./public/data.txt';

//fs.writeFileSync(fname,data);//同步
//console.log('文件内容输出完成');

fs.appendFile(fname,data,(err)=>{
    if(err) throw err;
    else console.log('文件内容输出完成');
});



console.log('脚本执行完成');