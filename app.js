const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
   console.log("client connected") ; 
    socket.on("msgg", (msg) => {    
        socket.broadcast.emit("msgg","hii kaise ho bhai ") ; 
    })
});

server.listen(3000,function () {
   console.log("server are running on port 3000");
});

