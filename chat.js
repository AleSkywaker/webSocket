const express = require('express');
const app = express();

const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

let port = 6500;
const expressServer = app.listen(port, () => {
  console.log('escuchando');
});

const io = socketio(expressServer);
// we can use connection or connect
io.on('connect', socket => {
  socket.emit('mensajeDesdeServidor', { datos: 'datos desde el server 🦄' });
  socket.on('datosAlServidor', datosDelCliente => {
    console.log(datosDelCliente);
  });
});
