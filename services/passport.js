const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
      }
    )
  );
};
