let ws = new WebSocket('ws://localhost:8000');
console.log(ws);

ws.onopen = event => {
  ws.send('Hola!!! estoy tratando de comunicarme desde el mas alla hahaha');
};
ws.onmessage = event => {
  document.write(event.data);
  console.log(event);
};
