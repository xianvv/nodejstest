/**
 * Created by xianvv on 2016/1/31.
 */
console.log(global.process.title);
console.info(__dirname);
console.log(process.cwd());
console.log(__filename);
console.time("label");
console.timeEnd("label");

process.stdout.write("this is stdout.\n");
process.stderr.write("err\n");
process.stdin.setEncoding("utf8");
//process.stdin.on("data",function(data){
//    console.log(data.toString());
//});
process.stdin.on("readable", function () {
    var data = process.stdin.read();
    console.log(data);
});
process.on("exit",function(){
    console.log("will exit.");
});
process.on("sigint",function(){
    console.log("will sigint.");
    process.exit();
});
