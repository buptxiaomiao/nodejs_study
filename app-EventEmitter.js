
//------------app eventEmitter-----------

var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("监听器 listener1 执行");
}
var listener2 = function listener2(){
	console.log("监听器 listener2 执行");
}
//绑定
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

//计数
var eventListeners = require('events').EventEmitter.listenerCount(
					eventEmitter,'connection');
console.log(eventListeners + "个监听器");
eventEmitter.emit('connection');

//移除listener1
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再受监听');
eventEmitter.emit('connection');

//计数
eventListeners = require('events').EventEmitter.listenerCount(
					eventEmitter,'connection');
console.log(eventListeners + "个监听器");

console.log("程序执行完毕");


