const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const skillSchema = new Schema(
  {
    name: { type: String, required: true }, // The user's first name
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
