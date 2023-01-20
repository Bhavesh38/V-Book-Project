const Book = require("../../models/Book.model");

const getBooks = async () => {
  return await Book.find({});
};

module.exports = {
  getBooks,
};
