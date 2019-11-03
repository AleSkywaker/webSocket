const http = require('http');

const ws = require('ws');

const server = http.createServer((req, res) => {
  res.end('I am server');
});

server.listen(5000, () => {
  console.log('listen on port 8000');
});
