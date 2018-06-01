const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const User = require("./models/User")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

mongoose.connect(keys.mongoURL)

app.get("/", (req, res) => res.send("Hello world"));

// Reuse database object in request handlers
app.post("/signup", function (req, res) {
  const exampleUser = new User({
    name: "Yaroslav",
    surname: "Kuzyo",
    email: "example@email.com",
    //TODO: hash password
    password: "password"
  })

  exampleUser.save((err) => {
    if (err) return err
    console.log("User saved");
    res.json({ success: true })
  })
});

app.listen(`${PORT}`, () => console.log(`Listen on port - ${PORT}`));