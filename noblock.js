
var http = require("http");

function fetchPage(){
	console.log("fetching page:");
	http.get({host:'www.baidu.com'},function(res){
			console.log("data returned from requesting page");
	}).on("error",function(e){
		console.log("There was an error1111" + e);
	});
}
function fetchApi(){
	console.log("fetching api:");
	http.get({host:"www.baidu.com"},function(res){
		console.log("data returned from the api");
	}).on("error",function(e){
		console.log("There was an error2222" + e);
	});
}

fetchPage();
fetchApi();
