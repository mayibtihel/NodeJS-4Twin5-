const express = require("express");
const http = require("http");
var path = require("path");
var app = express ();
const chatRouter = require('./routes/chat.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use('/chat', chatRouter)



const server = http.createServer(app);
const io = require("socket.io")(server);


io.on('connection', (socket) => {
    console.log ('User Connected');
    io.emit("msg", "A new user is connected");
   
socket.on('msg', (data) => {
       // console.log ('User Connected');
        io.emit("msg", data);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        io.emit("msg"," the  user disconnected");    
    });
});

server.listen(3000, () => console.log("server is runnniinngg,Yeeeeeey!"));





