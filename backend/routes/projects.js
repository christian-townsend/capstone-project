const router = require("express").Router();
let Project = require("../models/project.model");

// Get the initial list of Projects
router.route("/").get((req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add new Project
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const active = req.body.active;
  const description = req.body.description;
  const scope = req.body.scope;
  const skills = req.body.skills;
  const size = req.body.size;
  const duration = req.body.duration;
});
