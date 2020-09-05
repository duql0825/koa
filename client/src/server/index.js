var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io").listen(http);

app.get("/", function (req, res) {
  res.send("<h1>hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", function (msg) {
    console.log("chat message" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});
