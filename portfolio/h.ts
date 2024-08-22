// Create an HTTP server
const http = require('http');
const fs = require('fs');

// Create a request listener function
function requestListener(req, res) {
  // Read the HTML file
  fs.readFile(__dirname + "/index.html", function (err, data) {
    if (err) {
      res.writeHead(500);
      res.end(err);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

// Create the server
const server = http.createServer(requestListener);

// Start the server
server.listen(8000, function() {
  console.log('Server started on port 8000');
});