const http = require("http")
 

	let server = http.createServer((request,responce)=>
		{console.log(request.url)
		responce.end("Just simple text")})
	          server.listen(3000,(err)=>{
	          	if (err) { return console.log("The end")}
				else {console.log("Server is listening ")}})



