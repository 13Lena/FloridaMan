const router = require("express").Router();
const articlesController = require("../../controllers/articleController");

router
  .route("/")
  .get(articlesController.findAll);
router
  .route("/vote/:id")
  .put(articlesController.updateUpVote)
  .put(articlesController.updateDownVote);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  
  

module.exports = router;

