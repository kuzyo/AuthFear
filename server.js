const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

let db;

// Initialize connection once
MongoClient.connect(
  "mongodb://kuzyo:password@ds137600.mlab.com:37600/auth_fear",
  { useNewUrlParser: true },
  function(err, client) {
    if (err) throw err;

    db = client.db("auth_fear");

    // Start the application after the database connection is ready
    app.listen(`${PORT}`, () => console.log(`Listen on port - ${PORT}`));
  }
);

app.get("/", (req, res) => res.send("Hello world"));

// Reuse database object in request handlers
app.post("/signup", function(req, res) {
  db.collection("users").save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log(req.body);

    console.log("saved to database");
    res.send();
  });
});
