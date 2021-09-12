const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: "String", required: true }, // The teams's first name
  preferences: { first_preference: "ObjectId" },
  timestamps: true,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
