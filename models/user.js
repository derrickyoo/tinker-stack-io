const mongoose = require("mongoose");

// Lines 3 and 4 are identical - destructuring
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model("users", userSchema);
