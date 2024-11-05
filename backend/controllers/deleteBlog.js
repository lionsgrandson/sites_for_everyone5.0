require("dotenv").config();
const express = require("express");
const router = express.Router();
const Post = require("../mongoDB/mongoose");

// Delete post by postTitle
router.delete("/del/:postTitle", async (req, res) => {
  try {
    const result = await Post.deleteOne({ postTitle: req.params.postTitle });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: `Post not found - ${req.params.postTitle}` });
    }

    res.json({ message: `Post Deleted - ${req.params.postTitle}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
