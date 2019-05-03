const router = require("express").Router();
const scraperRoutes = require("./scraperRoutes");
const userRoutes = require("./userRoutes");

// Book routes
router.use("/user", userRoutes);
router.use("/scraper", scraperRoutes);

module.exports = router;