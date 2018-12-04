console.log("Starting index.js");

const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/user");
require("./services/passport")(keys);

mongoose.connect(
  keys.MONGODB_URI,
  { useNewUrlParser: true }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // Expires 30 days (milliseconds)
    keys: [keys.COOKIE_KEY] // Encrypt cookie with COOKIE_KEY
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
