const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const URI = process.env.URI;

const server = app.listen(PORT, () => {
  console.log(`a user has connected at Port ${PORT}`);
});

mongoose.connect(URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mongoose has connectd");
  }
});

const Socket = require("socket.io");
const io = Socket(server, { cors: { option: "*" } });
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(cors());
app.use(express.json({ limit: "500mb" }));
const adminRoute = require("./routes/admindashboard");
app.use("/admin", adminRoute);
const userid = [];

io.on("connection", (socket) => {
  socket.emit("clientId", { clientId: socket.id });
  socket.on("saveUser", (data) => {
    userid.push(data);
    console.log(userid);
  });

  socket.on("playing", (pass) => {
    console.log(pass);
    // userid.map((ui, ud) => {
      socket.broadcast.emit("message", pass);
    // });
  });

  socket.on("disconnect", () => {
    console.log("a userhas disconnected");
  });
});