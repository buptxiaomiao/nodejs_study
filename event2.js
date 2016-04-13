//--------------1 eventEmitter to 2 events--------

var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("something",function(arg1,arg2){
	console.log("listen1",arg1,arg2);
});
emitter.on("something",function(arg1,arg2){
	console.log("listen2",arg1,arg2);
});

emitter.emit('something','111111','22222');

//emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
// 运行结果中可以看到两个事件监听器回调函数被先后调用。
// 这就是EventEmitter最简单的用法。 
