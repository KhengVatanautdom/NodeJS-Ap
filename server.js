var http = require('http');

http.createServer(function (req, res) {
  res.write('I am Learning Cloud Developing');
  res.end();
}).listen(80, '0.0.0.0'); // Changed to port 3000
