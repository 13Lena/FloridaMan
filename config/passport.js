const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log("User: ",username)
        console.log("pass: ",password)
        db.User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                console.log("something went wrong\n", err);
                return done(err)
            }
            if (!user) {
                return done(null, false, { message: "No user found" });
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, { message: "incorrect password" });
            } else {
                return done(null, user)
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    console.log("serUser: ", user)
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("deserUser: ", id)
    db.User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;