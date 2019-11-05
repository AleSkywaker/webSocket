// let ws = new WebSocket('ws://localhost:8000');
const socket = io('http://localhost:7000');
console.log(socket);

socket.on('connect', data => {
  socket.on('bienvenido', msg => {
    document.write(msg);
  });
  socket.emit('messageCustom', { data: 'Hola soy Alex' });
});
