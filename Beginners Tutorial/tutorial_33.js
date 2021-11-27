const fs = require('fs');
const http = require('http');


http.createServer(function(req, res) {
	console.log('requested url: ' + req.url);
	if(req.url === '/home' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./sources/html/tutorial_33.html').pipe(res);
	} else if (req.url === '/api') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		var jsonObj = {
				name : 'max',
				surname : 'tesar',
				age : 26
		};
		res.end(JSON.stringify(jsonObj));		
	} else if(req.url === '/about' || req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./sources/html/tutorial_33a.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream('./sources/html/tutorial_33b.html').pipe(res);		
	}
}).listen(3000);

// Console will print the message
console.log("Server is running on http://127.0.0.1:3000/");