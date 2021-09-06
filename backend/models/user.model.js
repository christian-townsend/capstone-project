const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      // User's username
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    first_name: { type: String, required: true }, // User's first name
    last_name: { type: String, required: true }, // User's last name
    contact: {
      // User's contact details
      email: String,
      required: true,
      phone: String,
      required: false,
    },
    industry_sponsor: { Boolean, required: true }, // Flag for industry sponsor
    uc_staff: { Boolean, required: true }, // Flag for UC staff
    password: { String, required: true }, // User's password
  },
  {
    timestamps: true, // Time created + Time updated
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
