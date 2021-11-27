const http = require('http');


http.createServer(function(req, res) {
	/* Send then HTTP header
	 * HTTP Status: 200 : OK
	 * Content Type: text/plain 
	 */
	res.writeHead(200, {'Content-Type': 'application/json'});
	var jsonObj = {
			name : 'max',
			surname : 'tesar',
			age : 26
	};
	res.end(JSON.stringify(jsonObj));
}).listen(3000);

// Console will print the message
console.log("Server is running on http://127.0.0.1:3000/");