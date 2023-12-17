const express = require("express");
const app = express();
const http = require("http");
const expressSever = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(expressSever);

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("disconnect", () => {
    console.log("user Disconected");
  });
});

expressSever.listen(5000, () => {
  console.log("server run at @5000");
});
