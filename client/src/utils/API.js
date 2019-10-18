import openSocket from "socket.io-client";
const socket = openSocket("https://sta-google-books-search.herokuapp.com/");
require("dotenv").config();
const axios = require("axios");

export default {
  searchbyTitle: function(keywords) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keywords}&key=${process.env.REACT_APP_GOOGL_BOOKS_API_KEY}`
    );
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  addBook: function(data) {
    return axios.post("/api/books", data);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  notifyUser: function(cb) {
    socket.on("timer", timestamp => cb(null, timestamp));
    socket.emit("notifyUser", 100);
  },
};
