const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/api/users/unauthorized",
  failureFlash : true
}), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/signup", function(req, res, next) {
      db.User.find({email: req.body.email}, function(err, email) {
        console.log("email: ",email)
        console.log("length: ",email.length)

        // if (err) throw err;
        // if (email) {
        //   return res.json("email is already in use") 
        //   console.log("user exists...?")
        // }
        // if (!email.length) {
          console.log("making new user")
          let newUser = new db.User({
            email: req.body.email,
            password: req.body.password
          })
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save(function(err) {
            if (err) throw err;
            console.log("user saved!");
            res.redirect(307, "/api/user/login")
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

router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
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