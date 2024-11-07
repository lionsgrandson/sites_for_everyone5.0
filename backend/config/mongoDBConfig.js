const mongoose = require("mongoose");
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; // months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

const newDate = day + "/" + month + "/" + year;
console.log(newDate);
const PostSchema = mongoose.Schema({
  writersName: { type: String, required: true },
  postTitle: { type: String, required: true },
  postedDate: { type: String, default: newDate },
  content: { type: String, required: true },
  preview: { type: String, required: true },
  img: { type: String, required: false },
});
module.exports = mongoose.model("ms40posts", PostSchema);
