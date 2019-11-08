const socket = io('http://localhost:6500/');
socket.on('mensajeDesdeServidor', datosDesdeServidor => {
  console.log(datosDesdeServidor);
  document.write(datosDesdeServidor.datos);
  socket.emit('datosAlServidor', { datos: 'Datos al servidor' });
});
