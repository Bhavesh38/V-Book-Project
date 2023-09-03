const router = require("express").Router();
const bookRepository = require("../repository/book/book.repository");
router.get("/", async (req, res, next) => {
	try {
		const books = await bookRepository.getBooks();
		return res.status(200).json(books);
	} catch (e) {
		next(e);
	}
});

router.post("/add" , async (req,res) => {
	try{
		const bookdetails = req.body 
		const response = bookRepository.addBook(bookdetails)
		res.status(200).json(response)
	}catch(e){
		res.status(500).send("book not added")
	}
}

module.exports = router;
