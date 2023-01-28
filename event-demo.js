const express = require("express");
const EventEmitter = require("events");
const event = new EventEmitter();

const app = express();

let hits = 0;
event.on("countAPI", () => {
  hits++;
  console.log(`API Hits : ${hits}`);
});

app.get("/", (req, res) => {
  res.send("Home page");
  event.emit("countAPI");
});

app.get("/search", (req, res) => {
  res.send("Search page");
  event.emit("countAPI");
});

app.get("/update", (req, res) => {
  res.send("Update page");
  event.emit("countAPI");
});

app.listen(3000);
