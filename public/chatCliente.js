const socket = io('http://localhost:6500/');
socket.on('mensajeDesdeServidor', datosDesdeServidor => {
  console.log(datosDesdeServidor);
  document.write(datosDesdeServidor.datos);
  socket.emit('datosAlServidor', { datosToServer: 'Se acaba de conectar un nuevo cliente' });
});

// socket.on('ping', () => {
//   console.log('Ping was received from server');
// });

socket.on('pong', function(d) {
  console.log(d);
});
