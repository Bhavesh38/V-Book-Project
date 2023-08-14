const Book = require("../../models/Book.model");

const getBooks = async () => {
	return await Book.find({});
};

const addBook = async (bookdetails) =>{
	const newBook = new Book(bookdetails)
	const res = await newBook.save()
	return res
};

module.exports = {
	getBooks,addBook
};
