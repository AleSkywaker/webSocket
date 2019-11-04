const http = require('http');

var socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('I am server 7000');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
  // ws.send became socket.emit
  socket.emit('welcome to websocket server!!! 👻');
  socket.on('kaka', msg => {
    console.log(msg);
  });
});

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
