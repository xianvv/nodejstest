/**
 * Created by xianvv on 2016/1/31.
 */
var fs=require("fs");

//fs.readFile("test.js","utf8",function(err,data){
//    if(err){
//        console.log(err);
//        return;
//    }
//    console.log(data);
//});
var data=fs.readFileSync("test.js","utf8");
console.log(data);