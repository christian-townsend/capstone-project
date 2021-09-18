const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: "String", required: true }, // The teams's name
  preferences: [
    { type: Schema.Types.ObjectId, ref: "Project", required: false },
  ], // Makes reference to Model definition of project.model.js
  allocated_project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: false,
  }, // The Project allocated to the team
  timestamps: true,
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;