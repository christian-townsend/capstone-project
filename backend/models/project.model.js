const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true }, // The Project's title
    active: { type: Boolean, required: true }, // A flag is the Project is active
    description: { type: String, required: true }, // A description of the Project
    scope: { type: String, required: true }, // The scope of the Project
    skills: { type: String, required: true }, // Preferred skills for the Project
    size: { type: String, required: true }, // The size of the Project. E.g. (3-4 students)
    duration: { type: String, required: true }, // The estimated duration of the Project.
    approved: { type: Boolean, required: false }, // A flag to indicate if a submitted project has been approved by an admin
    project_sponsor_mapping_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    }, // The Project's sponsor/s
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
