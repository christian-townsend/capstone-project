const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: "String", required: true }, // The teams's name. The only value required upon creation.
  capstone: { type: Boolean, required: false }, //Whether group was selected for Capstone expo.
  students: [{ type: Schema.Types.ObjectId, ref: "User", required: false }], // An array of Students assigned to the team
  preferences: [
    { type: Schema.Types.ObjectId, ref: "Project", required: false },
  ], // An array of Project's included in the Team's preferences
  allocated_project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: false,
  }, // The Project allocated to the team
  timestamps: true,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
