const db = require("../models");
const vo = require("vo");
const Nightmare = require("nightmare");
const nightmare = Nightmare({
  show: true
});

module.exports = {
  // this needs editing
  test: function(req, res) {
    console.log("hi")
  },

  findAll: function (req, res) {
    db.Book
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // this also needs editing
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Book
  //     .findOneAndUpdate({
  //       _id: req.params.id
  //     }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Book
  //     .findById({
  //       _id: req.params.id
  //     })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // Hopefully these work like this


};