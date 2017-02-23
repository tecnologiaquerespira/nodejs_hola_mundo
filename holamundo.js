var http = require("http"); 

var server = http.createServer(function(request,response){
	console.log("hola mundo"); // imprime a consola
	response.end("Hola Mundo"); // imprime al cliente
});

server.listen(5050);