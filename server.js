const http = require('http');

const webSocket = require('ws');

const server = http.createServer((req, res) => {
  res.end('I am server');
});

const webSocketServer = new webSocket.Server({ server });

webSocketServer.on('headers', (headers, req) => {
  console.log(headers);
});

webSocketServer.on('connection', (ws, req) => {
  ws.send('Bienvenido al servidor de websocket');
  ws.on('message', msg => {
    console.log(msg);
    ws.send(msg);
  });
  console.log(ws.send);
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
