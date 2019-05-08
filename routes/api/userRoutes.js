const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/user/unauthorized",
  failureFlash : true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    username: req.username,
    loggedIn: true
  });
  res.redirect("/favorites")
});



router.post("/signup", function(req, res, next) {
      db.User.find({username: req.body.username}, function(err, username) {
        console.log("email: ",username)
        console.log("length: ",username.length)

        // if (err) throw err;
        // if (email) {
        //   return res.json("email is already in use") 
        //   console.log("user exists...?")
        // }
        // if (!email.length) {
          console.log("making new user")
          let newUser = new db.User({
            username: req.body.username,
            password: req.body.password,
            loggedIn: true
          })
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function(err) {
            if (err) throw err;
            console.log("user saved!");
            res.redirect(307, "/favorites");
            
          });
        // }
      })     
  
  })

router.get("/unauthorized", function(req, res, next) {
  res.json({
    error: req.flash("error"),
    message: "user not authenticated"
  });
});

router.get("/favorites", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  res.json("User logged out successfully");
});

router.get("/admin", authMiddleware.isAdmin, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

module.exports = router;