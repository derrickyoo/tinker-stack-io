const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

// Authenitcate users with Google
// https://console.developers.google.com
// http://www.passportjs.org/packages/passport-google-oauth20/
module.exports = keys => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
      },
      (accessToken, refreshToken, profile, done) => {
        // TODO: Authentication functionality
        console.log("Google callback initiated");

        User.findOne({ googleID: profile.id }).then(existingUser => {
          if (existingUser) {
            // User record exists with profile ID
            done(null, existingUser);
          } else {
            // Async operation that creates a new user record
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
  );
};
