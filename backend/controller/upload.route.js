const router = require("express").Router();
const uploadImage = require("../middleware/uploadImage");
const uploadCtrl = require("../usecases/upload.usecase");
const auth = require("../middleware/auth");

// login as normal user   -> refresh_token -> uploadAvatar
router.post("/upload_avatar", uploadImage, auth, uploadCtrl.uploadAvatar);
router.post(
  "/upload_crsimage",
  uploadImage,
  auth,
  uploadCtrl.uploadCourseimage
);

module.exports = router;
