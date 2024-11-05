require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const posts = [
  { username: "Moshe", password: "1234", title: "post 1" },
  { username: "Jim", title: "post 2" },
];

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader =
    req.headers["authorization"] ||
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9zaGUiLCJwYXNzIjoiMTExMSIsImlhdCI6MTcyMjEwODg5NX0.UAqaceOfcnyLwup8KCGZC4UyTpgulD6H8S53MuVINIQ";
  // `Bearer ${accessToken}`; TODO find a way to get the var automaticlly sent to this fucntion
  const token = authHeader && authHeader.split(" ")[1]; //gives you the 2nd  elemnt in the string ("this is the string") you split it every space- you get the word 'is'
  if (token == null) return res.sendStatus(401); //unauthorized

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    // token is checked against env and outputs either err or a auth user
    if (err) return res.sendStatus(403); //forbidden
    req.user = user; // you then set the auth user to the req.user which you can use evreywhere
    next();
  });
}

// Route to get posts
router.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name)); //this is just to test the login, you'd want to show all the posts you
});

// Route to login and generate a token
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { name: username, pass: password };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

// TODO add an exparation to the token
module.exports = router;
// TODO figure out the different bettween middleware and controllers and see what other functions you need such as reading posts and adding psots and what they fit into
