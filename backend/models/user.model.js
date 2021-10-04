const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      // The user's username
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    first_name: { type: String, required: true }, // The user's first name
    last_name: { type: String, required: true }, // The user's last name
    email: { type: String, required: true }, // The user's email
    student: { type: Boolean, required: true }, // A flag to indicate if the user is a student
    industry_sponsor: { type: Boolean, required: false }, // A flag to indicate if the user is an industry sponsor
    organisation: { type: String, required: false }, // An industry sponsor's organisation
    uc_staff: { type: Boolean, required: true }, // A flag to indicate if the user is a member of UC staff
    sponsored_projects: [
      { type: Schema.Types.ObjectId, ref: "Project", required: false },
    ], // An array of Project objects that a User can sponsor (for industry sponsors and uc staff only)
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
