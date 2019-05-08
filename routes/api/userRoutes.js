const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/user/unauthorized",
  failureFlash: true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    username: req.username,
    loggedIn: true
  });
});

router.post("/signup", function (req, res, next) {
  console.log(req.body)
  db.User.find({ username: req.body.username }, function (err, username) {
    console.log("email: ", username)
    if (err) throw err;
    console.log("making new user")
    let newUser = new db.User({
      username: req.body.username,
      password: req.body.password
    });

    newUser.password = newUser.generateHash(req.body.password);
    console.log(newUser)
    db.User.create({
      username: req.body.username,
      password: newUser.password
    }, function (err) {
      if (err) throw err;
      console.log("user saved!");
      res.json({ username: req.body.username });
    });
  });
});

router.get("/unauthorized", function (req, res, next) {
  res.json({
    error: req.flash("error"),
    message: "user not authenticated"
  });
});

router.get("/favorites", authMiddleware.isLoggedIn, function (req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function (req, res, next) {
  res.json("User logged out successfully");
});

router.get("/admin", authMiddleware.isAdmin, function (req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.put("/favorite", function(req, res) {
  db.Article.findById(req.body._id)
  .then(dbArticle => {
      db.User.findOneAndUpdate({_id:req.body._id}, {"$push": {"favs":dbArticle} })}
)});

module.exports = router;