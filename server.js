const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const keys = require("./config/keys");
const User = require("./models/User");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

mongoose.connect(keys.mongoURL);

app.get("/", (req, res) => res.send("Hello world"));

app.post("/api/signup", function(req, res) {
  const { firstName, lastName, email, password } = req.body;

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.json({ message: "Registration failed. Email is in use" });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      firstName,
      lastName,
      email,
      password
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      const payload = { firstName, lastName };

      // TODO: what is the best way to pass data with token
      const token = jwt.sign(JSON.stringify(payload), keys.secret);

      // Repond to request indicating the user was created
      res.json({
        message: "Reqistration successfull",
        token
      });
    });
  });
});

app.post("/api/signin", (req, res) => {
  const { userEmail, userPassword } = req.body;

  User.findOne({ email: userEmail }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.json({
        message: "Authentication failed. User not found."
      });
    } else {
      if (user.password != userPassword) {
        res.json({
          message: "Authentication failed. Wrong password."
        });
      } else {
        const { firstName, lastName } = user;

        const payload = {
          firstName,
          lastName
        };

        var token = jwt.sign(JSON.stringify(payload), keys.secret);

        res.json({
          message: "Authentication successfull",
          token
        });
      }
    }
  });
});

app.listen(`${PORT}`, () => console.log(`Listen on port - ${PORT}`));

// 1) How to make call with token in header from client
// 2) Do i need to use middleware to check on token
// 3) Do i need to redirect from server or it all react-router work
// 4) Where to decode token and save in storage
