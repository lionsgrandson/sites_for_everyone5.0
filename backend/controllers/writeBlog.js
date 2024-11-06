require("dotenv").config();
const express = require("express");
const router = express.Router();
const Post = require("../config/mongoDBConfig");

//SUBMITS ALL THE POSTS
router.post("/new", async (req, res) => {
  const post = new Post({
    writersName: req.body.writersName,
    postTitle: req.body.postTitle,
    content: req.body.content,
    preview: req.body.preview,
    img: req.body.img,
  });
  try {
    const savedPosts = await post.save();
    res.json(savedPosts);
  } catch (err) {
    res.json({ message: err.Messages });
  }
});

module.exports = router;
