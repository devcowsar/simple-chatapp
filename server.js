const express = require("express");
const app = express();
const http = require("http");
const expressSever = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(expressSever);
const path = require("path");

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/express-server", (req, res) => {
  res.end("this is my backend");
});

io.on("connection", (socket) => {
  console.log("new user connected");

  setTimeout(() => {
    socket.emit("msg", "this is msg from server");
  }, 5000);

  socket.on("disconnect", () => {
    console.log("user Disconected");
  });
});

expressSever.listen(5000, () => {
  console.log("server run at @5000");
});
