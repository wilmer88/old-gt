// Dependencies
// const express = require("express")

// =============================================================

// Require the sequelize library
const Sequelize = require("sequelize")
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection")
// Create a "Book" model with the following configuration
const Book = sequelize.isDefined("book",{
    title: sequelize.STRING,
    author: sequelize.STRING,
    genere: sequelize.STRING,
    pages: sequelize.INTEGER
})
Book.sync();

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use
module.exports = Book;
