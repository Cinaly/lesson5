/**
 * Created by web-01 on 2017/11/5.
 */
let buff1=Buffer.from([1,2,3]);

for(var i=0;i<buff1.length;i++){
    console.log(buff1[i]);
}

for (let key of buff1.keys()) {
    console.log(`${key}-${buff1[key]}`);
}

for (let value of buff1.values()) {
    console.log(value);
}

for (let pair of buff1.entries()) {
    console.log(pair);
}