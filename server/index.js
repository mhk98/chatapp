const express = require('express');
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const { addUser, removeUser } = require('./users');
const port = 5000;
const app = express();

app.use(cors());
// Apply CORS Middleware
app.use(cors({
  origin: ['http://localhost:5173/'],
  credentials: true
}));

app.use(cors({ origin: true, credentials: true }));


const httpServer = http.createServer(app);
// const io = socketIO(httpServer);

const io =  socketIO(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);


socket.on("join", ({name, room}, callback) => {
  console.log("Join request ", name)
  const {error, user} = addUser({id:socket.id, name, room});
  if(error){
    callback(error);
  }
  callback();
});

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
    removeUser(socket.id)
  })
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})