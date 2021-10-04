const router = require("express").Router();
const { requireAuth } = require("../middlewares/authMiddleware");
let Project = require("../models/project.model");

// Get the initial list of Projects
router
  .route("/")
  .all(requireAuth)
  .get((req, res) => {
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
  const project_sponsors = req.body.project_sponsors;

  const newProject = new Project({
    title,
    active,
    description,
    scope,
    skills,
    size,
    duration,
    project_sponsors,
  });

  newProject
    .save()
    .then(() => res.json("Project added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Project by ID
router.route("/id").get((req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Existing Project
router.route("/update/:id").post((req, res) => {
  Project.findById(req.params.id).then((project) => {
    project.title = req.body.username;
    project.active = req.body.active;
    project.description = req.body.description;
    project.scope = req.body.scope;
    project.skills = req.body.skills;
    project.size = req.body.size;
    project.duration = req.body.duration;
  });
});

module.exports = router;
