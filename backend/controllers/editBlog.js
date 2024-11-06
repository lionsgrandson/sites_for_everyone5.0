require("dotenv").config();
const express = require("express");
const router = express.Router();
const Post = require("../config/mongoDBConfig");

// Generic function to update a post field
const updatePostField = async (filter, updateField, res) => {
  try {
    const result = await Post.updateOne(filter, { $set: updateField });
    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ message: "Post not found or nothing was updated" });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update preview by preview parameter
router.put("/editTitle/:preview", async (req, res) => {
  await updatePostField(
    { preview: req.params.preview },
    { preview: req.body.preview },
    res
  );
});

// Update postTitle by postTitle parameter
router.put("/editTitle/:postTitle", async (req, res) => {
  await updatePostField(
    { postTitle: req.params.postTitle },
    { postTitle: req.body.postTitle },
    res
  );
});

// Update content by content parameter
router.put("/editContent/:content", async (req, res) => {
  await updatePostField(
    { content: req.params.content },
    { content: req.body.content },
    res
  );
});

// Update writersName by writersName parameter
router.put("/editWriter/:writersName", async (req, res) => {
  await updatePostField(
    { writersName: req.params.writersName },
    { writersName: req.body.writersName },
    res
  );
});

// Update multiple fields by postTitle parameter
router.put("/edit/:postTitle", async (req, res) => {
  const updateFields = {
    writersName: req.body.writersName,
    postTitle: req.body.postTitle,
    content: req.body.content,
    preview: req.body.preview,
  };
  await updatePostField({ postTitle: req.params.postTitle }, updateFields, res);
});

module.exports = router;
