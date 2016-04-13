//----------非阻塞实例------------

var fs = require("fs");
//执行异步操作的函数 将回调函数作为最后一个参数
fs.readFile('input.txt',function(err,data){
					//回调参数将错误对象作为第一个参数
	if (err) return console.error(err);
	console.log(data.toString());
})
console.log("程序执行结束");
//第二个实例我们呢不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能
