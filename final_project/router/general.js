const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    const get_books = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 4)));
      });

      get_books.then(() => console.log("Promise for Task 10 resolved"));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    
    const get_book = new Promise((resolve, reject) => {
        resolve(res.send(books[isbn]));
      });

      get_book.then(() => console.log("Promise for Task 11 resolved"));
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const writer = req.params.author;
    const results = Object.values(books).filter(({author}) => author === writer);
    
    const get_books = new Promise((resolve, reject) => {
        resolve(res.send(res.send(results)));
      });

      get_books.then(() => console.log("Promise for Task 12 resolved"));
    
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const cover = req.params.title;
    const results = Object.values(books).filter(({title}) => title === cover);
    
    const get_books = new Promise((resolve, reject) => {
        resolve(res.send(res.send(results)));
      });

      get_books.then(() => console.log("Promise for Task 13 resolved"));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn].reviews)
});

module.exports.general = public_users;
