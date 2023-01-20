const router = require("express").Router();
const CategoryRepository = require("../repository/book/categories.repository");
router.get("/", async (req, res, next) => {
  try {
    let data = await CategoryRepository.getCat();
    return res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;