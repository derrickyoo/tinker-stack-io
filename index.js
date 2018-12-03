console.log("Starting index.js");

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const hbs = require("hbs");

const keys = require("./config/keys");

const app = express();

// Authenitcate users with Google
// https://console.developers.google.com
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

if (keys.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Welcome to TinkerStack.io");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
