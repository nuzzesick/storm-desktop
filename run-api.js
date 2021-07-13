// Run API without Electron

const socketio = require('socket.io');
const httpServer = require('http');
const { server } = require('./api/index');

const socketPort = 8001;

const http = httpServer.Server().listen(socketPort);

const io = socketio(http, {
  cors: {
    methods: ['GET', 'POST'],
  },
});

server(io);
