const titleElement = document.getElementById("title");
const socket = io("http://localhost:6500/");
socket.on("mensajeDesdeServidor", datosDesdeServidor => {
  console.log(datosDesdeServidor);
  //titleElement.innerHTML = datosDesdeServidor.datos;
  // document.write(datosDesdeServidor.datos);
  socket.emit("datosAlServidor", {
    datosToServer: "Se acaba de conectar un nuevo cliente"
  });
});

document.querySelector("#message-form").addEventListener("submit", e => {
  e.preventDefault();
  const newMessage = document.querySelector("#user-message").value;
  console.log("Form submitted!!!", newMessage);
  socket.emit("mensajeDesdeCliente", { texto: newMessage });
});
socket.on("ping", () => {
  console.log("Ping was received from server");
});

socket.on("pong", latency => {
  console.log(latency);
  console.log("pong to server");
});
socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("sendDAtos", d => {
  document.getElementById("messages").innerHTML = d.datosDelServer.texto;
});
