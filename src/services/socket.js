import { io } from 'socket.io-client';

const URL = 'http://localhost:4000';
const socket = io(URL, { autoConnect: false });

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

export default socket;
