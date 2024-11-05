const express = require("express");
const router = express.Router();
const getPost = require("../controllers/getPost");
const delPost = require("../controllers/delPost");
const editPost = require("../controllers/editPost");
const newPost = require("../controllers/newPost");

router.use("/", getPost);
router.use("/", delPost);
router.use("/", editPost);
router.use("/", newPost);

module.exports = router;
