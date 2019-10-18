require("dotenv").config();

const routes = require("./routes");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

const PORT = process.env.PORT || 3005;

io.on("connection", client => {
  client.on("notifyUser", () => {
    console.log("saving the book to mongo...");
    client.emit("timer", new Date());
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

server.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
