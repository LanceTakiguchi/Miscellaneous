// Lets require/import the HTTP Moudle
var http = require('http');
var fs = require("fs");

//Lets define a port we want to listen to
const PORT = 8080;

function handleRequest(request, response){
	var url = request.url.substring(1);
	// console.log(url);
	var extension_start = url.lastIndexOf('.');
	// console.log(extension_start + 1);
	var extension = url.substring(extension_start + 1);
	console.log("The extension: " + extension);
	//response.writeHead(200, {'content-Type': 'text/plain'});
	var mime_type = 'text/plain';
	switch(extension){
		case 'html':
		mime_type = 'text/html';
		break;
		case 'css':
		mime_type = 'text/css';
		break;
		case 'jpeg':
		case 'jpg':
		mime_type = 'image/jpeg';
		break;
	}
	// fs.exists('document_root/' + url,function(exists){
	// 	if(exists){
	// 		// console.log('yes');
	// 	}else{
	// 		console.log("no");
	// 		fs.readFile("document_root/404.html", "utf8", function(error, data){
	// 			response.end(error);
	// 	//console.log(data);
	// });

}
});
fs.readFile("document_root/" + url, "utf8", function(error, data){
	response.end(data);
		//console.log(data);
	});

	//response.end("It Works!! Path Hit: " + request.url + data);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
	//Callback triggered when server is sucecessfully listening. Hurray!
	console.log("Server listening on: http://localhost: %^s", PORT);
})