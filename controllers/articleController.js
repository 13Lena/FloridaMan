const db = require("../models");


module.exports = {
  
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  // this also needs editing
  findById: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },

  findByTag: function (req, res) {
    db.Article
      .find({ meta_tags: req.params.tag })
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  
  updateUpVote: function (req, res){
    db.Article
    .findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.status(422).json(err));
  },

  updateDownVote: function (req, res){
    db.Article
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.status(422).json(err));
  }
};