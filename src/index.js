var uniqueRandomArray = require('unique-random-array');

var booksNames = require('./books.json');

module.exports = {

  all: booksNames,
  random: uniqueRandomArray(booksNames)

};