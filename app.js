var text = "<!DOCTYPE>" + 
"<html><head>" + 
		"<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>" +
		"<script type='text/javascript' src='flip.js'></script>" +
		"<meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1'>" +

	"</head>" +
	"<body>" + 
		
		"<h1>BRAIN GAME</h1>" + 
		"<video autoplay>" + 
		"<source src='/Users/phanvy/Documents/term4/web/vyyphan/images/tutorial.mp4' type='video/mp4'>" + 
		"</video>" + 
		"<br><br><button id='skip' type='button' onclick='skip();'>Skip Tutorial</button>" + 
		
		
		"<link rel='stylesheet' type='text/css' href='flip.css'>" + 

	"</body>" +

	"</html>";

const http = require('http');
// const myModule = require('./COMP4711/MemoryGame/flip.js');
// //myModule.skip();
// myModule.dealCard(0);
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end(text);
});
server.listen(port,() => {
console.log(`Server running at port `+ port);
});