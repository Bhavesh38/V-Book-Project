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

module.exports = router;
