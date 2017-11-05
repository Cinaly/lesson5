/**
 * Created by web-01 on 2017/11/5.
 */
const http=require('http');

let ip='123.123.12.112';

let options={
    host:'ip.taobao.com',
    path:'/service/getIpInfo.php?ip='+ip
};

let request=http.request(options,(res)=>{
    res.on('data',(buffer)=>{
        console.log(JSON.parse(buffer.toString()));
    })
});
request.end();
