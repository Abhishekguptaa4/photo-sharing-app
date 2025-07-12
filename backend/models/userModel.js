const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Photo",
    }
  ],

  
  albums: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    }
  ],
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;