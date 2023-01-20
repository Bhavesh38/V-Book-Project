const userRoutes = require("./user.route");
const uploadRoutes = require("./upload.route");
const courseRouter = require("./course.route");
const orderRoute = require("./order.route");
const bookRoutes = require("./book.route");
const categoryRoutes = require("./categories.route");
const router = require("express").Router();
//Routes
router.use("/user", userRoutes);
router.use("/api", uploadRoutes);
router.use("/api/book", bookRoutes);
router.use("/courses", courseRouter);
router.use("/orders", orderRoute);
router.use("/categories", categoryRoutes);
// router.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

module.exports = router;
