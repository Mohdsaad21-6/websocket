// const { log } = require("console");
// const express = require("express");
// const http = require("http");
// const path = require("path");
// const { Server } = require("socket.io");

// const app = express();

// const server = http.createServer(app);

// const io = new Server(server);

// io.on("connection", (socket) => {
//     socket.on("user-message", (message) => {
//       io.emit("message", message);
//     });
//   });

// app.use(express.static(path.resolve(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// server.listen(4444, () => {
//   console.log("Server is running on port 4444");
// });



const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));