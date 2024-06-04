const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
  username: {
    required: true,
    type: String,
    trim: true,
  },

  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  

});

const User = mongoose.model("User", userSchema);
module.exports = User;