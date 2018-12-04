console.log("Starting index.js");

const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");

const keys = require("./config/keys");

require("./services/passport")(keys);

mongoose.connect(
  keys.MONGODB_URI,
  { useNewUrlParser: true }
);

const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
