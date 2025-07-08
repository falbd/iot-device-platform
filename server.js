require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Create HTTP server
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Middleware: attach io to request
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/devices', require('./routes/deviceRoutes'));
app.use('/api/telemetry', require('./routes/telemetryRoutes'));

// Socket.IO connection
io.on('connection', socket => {
  console.log('New client connected');

  socket.on('joinDeviceRoom', deviceId => {
    socket.join(deviceId);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
