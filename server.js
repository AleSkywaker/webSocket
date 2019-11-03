const http = require('http');

const ws = require('ws');

const server = http.createServer((req, res) => {
  res.end('I am server');
});

const PORT = 5000;
server.listen(5000, () => {
  console.log(`Listen on port ${PORT}`);
});
