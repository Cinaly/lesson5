/**
 * Created by web-01 on 2017/10/31.
 */
const fs=require('lesson5/fs');

var stats1=fs.statSync('./public');
console.log(stats1);

var stats2=fs.statSync('./public/index.html');
console.log(stats2);

var fname='./public';
fs.stat(fname,function(err,stats){
    if(err){
        fs.mkdir(fname,(err)=>{
            if(err) console.log('目录创建失败');
            else console.log('=目录创建成功');
        });
    }else{
        if(stats.isFile()){
            console.log(fname + "是一个已经创建的文件");
        }else{
            fs.readdir(fname,(err,files)=>{
               if(err)  console.log("读取已经存在的目录失败");
               else console.log(files);
            });

        }
    }
});