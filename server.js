var http = require('http');

http.createServer(function (req, res) {
  res.write('I am Learning Cloud Developing');
  res.end();
}).listen(3000, '0.0.0.0'); // Changed to port 3000
