const mongoose = require("mongoose");
const db = require("../models");
const floridaJson = require("./scraper-data.json")

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/floridaMan"
);


db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(floridaJson))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
