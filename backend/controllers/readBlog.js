require("dotenv").config();
const express = require("express");
const router = express.Router();
const Post = require("../mongoDB/mongoose");

// Filter by "POST TITLE"
router.get("/get/:postTitle", async (req, res) => {
  try {
    const findPost = await Post.find({
      postTitle: req.params.postTitle,
    });
    if (findPost.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(findPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All the posts
router.get("/get", async (req, res) => {
  try {
    const findPost = await Post.find();
    res.json(findPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
