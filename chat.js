const express = require("express");
const app = express();

const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

let port = 6500;
const expressServer = app.listen(port, () => {
  console.log(`escuchando en puerto ${port}`);
});

const io = socketio(expressServer);
// we can use connection or connect
io.on("connection", socket => {
  socket.emit("mensajeDesdeServidor", { datos: "datos desde el server 🦄" });
  socket.on("datosAlServidor", datosDelCliente => {
    console.log(datosDelCliente);
  });

  socket.on("mensajeDesdeCliente", datos => {
    console.log(datos);
    socket.emit("sendDAtos", { datosDelServer: datos });
  });
});
