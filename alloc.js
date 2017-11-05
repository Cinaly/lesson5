/**
 * Created by web-01 on 2017/11/5.
 */
let buff1=Buffer.alloc(16);//创建16字节的缓冲区,初始化全是0
console.log(buff1);

//16byte=8bits

let buff2=Buffer.from([0x41,0x61]);
console.log(buff2.toString());


let buff3=Buffer.from('aA');
console.log(buff3.toString());


let buff4=Buffer.from('一','utf8'); //汉字三字节
console.log(buff4.toString());

let buff5=Buffer.allocUnsafe(8); //不是一个新的缓冲区
console.log(buff5);


let buff6=Buffer.from("发生的非法","utf8");
console.log(buff6.toString('base64'),buff6.toString('hex')); //base64加密是可逆的 md5不可逆






