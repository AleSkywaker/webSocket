const express = require('express');
const app = express();

const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(6500, () => {
  console.log('escuchando');
});

const io = socketio(expressServer);
io.on('connection', socket => {
  socket.emit('mensajeDesdeServidor', { datos: 'datos desde el server 🦄' });
  socket.on('datosAlServidor', datosDelCliente => {
    console.log(datosDelCliente);
  });
});
