/**
 * Created by web-01 on 2017/11/5.
 */
const fs=require('fs');

console.log(__filename);
console.log(__dirname);

fs.stat(__filename,(err,stat)=>{
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});


fs.stat(__dirname,(err,stat)=>{
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});



