const db = require("../models");

module.exports = {
    findBooks: function(req, res) {
        db.Book
          .find(req.query)
          .then(booksData => res.json(booksData))
          .catch(error => console.log(error));
    },
    addBook: function(req, res) {
        db.Book
          .create(req.body)
          .then(result => res.json(result))
          .catch(error => console.log(error));
    },
    removeBook: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(bookData => bookData.remove())
          .then(result => res.json(result))
          .catch(error => console.log(error));
    }
}