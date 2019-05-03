const router = require("express").Router();

const articlesRoutes = require("./articlesRoutes");
// const userRoutes = require("./userRoutes")

router.use("/articles", articlesRoutes);
// router.use("/user", userRoutes)

module.exports = router;