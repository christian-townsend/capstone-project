const router = require("express").Router();
let Team = require("../models/group.model");

// Route for getting all teams
router.route("/").get((req, res) => {
  Team.find()
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Route for displaying unique team (show students in team etc.)
router.route("/:id").get((req, res) => {
  Team.findById(req.params.id)
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Need a Route for adding teams
router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newTeam = new Team({
    name,
  });

  newTeam
    .save()
    .then(() => res.json("Team added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// Need a Route for deleting teams

// Need a Route for updating teams (e.g. join the team, leave the team)
