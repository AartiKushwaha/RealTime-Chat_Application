const express = require("express");
const colors = require("colors");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const app = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Cool!! You made it till here..Now move ahead!");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(5000, () => {
    console.log(`Server listening on port ${PORT}...`.yellow.bold);
});
