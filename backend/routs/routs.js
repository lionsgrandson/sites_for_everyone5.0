const express = require("express");
const router = express.Router();
const getPost = require("../controllers/readBlog");
const delPost = require("../controllers/deleteBlog");
const editPost = require("../controllers/editBlog");
const newPost = require("../controllers/writeBlog");

router.use("/", getPost);
router.use("/", delPost);
router.use("/", editPost);
router.use("/", newPost);

module.exports = router;
