const express = require('express');
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const port = 5000;
const app = express();

// app.use(cors());
app.use(cors({ origin: true, credentials: true }));

const httpServer = http.createServer(app);
const io = socketIO(httpServer);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id)
  })
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})