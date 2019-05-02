var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    headline: {
    type: String,
    required: true
  },

  pub_date: {
    type: Date,
    required: true
  },

  image_url: {
    type: String,
  },

  body: {
    type: String,
    required: true
  },

  url: {
    type: String,
  },

  meta_tags: {
    type: Array,
    required: true
  },

  upvote: {
    type: Number,
    required: true,
    default: 0
  },

  downvote: {
    type: Number,
    required: true,
    default: 0
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;