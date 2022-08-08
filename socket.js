const socketIO = require('socket.io');
const socket = {};

function connect(server) {
    socket.io = socketIO(server);
    socket.io.on('connection', function (socket) {
        console.log('New connection', socket.id);
    });
}

module.exports = {
    connect,
    socket,
}