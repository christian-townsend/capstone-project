const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    //user: { type: String, required: false },
    title: { type: String, required: false }, // The Project's title
    active: { type: Boolean, required: false }, // A flag is the Project is active
    description: { type: String, required: false }, // A description of the Project
    scope: { type: String, required: false }, // The scope of the Project
    skills: { type: String, required: false }, // Preferred skills for the Project
    size: { type: String, required: false }, // The size of the Project. E.g. (3-4 students)
    duration: { type: String, required: false }, // The estimated duration of the Project.
    approved: { type: Boolean, required: false }, // A flag to indicate if a submitted project has been approved by an admin
    expo: {type: Boolean, required: false }, // A flag to indicate if a project was selected for the Capstone Expo
    project_sponsors: [
      { type: Schema.Types.ObjectId, ref: "User", required: false },
    ], // An array of Team's assigned to the Project
    student_teams: [
      { type: Schema.Types.ObjectId, ref: "Team", required: false },
    ], // An array of Team's assigned to the Project
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
