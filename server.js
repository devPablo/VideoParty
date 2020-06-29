const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when clients connect
io.on('connection', socket => {
    console.log(`New connection with ID: ${socket.id}`);

    socket.on('changeVideoState', state => {
        if (state == 'play') {
            io.sockets.emit('S-changeVideoState', state);
        } else if (state == 'pause') {
            io.sockets.emit('S-changeVideoState', state);
        }
    });
    
    socket.on('changeVideoTime', time => {
        socket.broadcast.emit('S-changeVideoTime', time);
    });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});