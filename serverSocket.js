const http = require('http');

var socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am server');
});

const PORT = 7000;
server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
