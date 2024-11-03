require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { user_name, user_email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "mosheschwartzberg@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ success: true, message: "Email sent successfully" });
    }
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
