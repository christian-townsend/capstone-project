const User = require("../models/user.model");

function findUser(userNameTest) {
  User.findOne({
    username: userNameTest,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    // If user already exists, re-direct them to the Dashboard page
    if (user) {
      res.redirect("/DashboardPage");
      return;
    }

    // Add the new user if they dont already exist, and re-direct them to the Dashboard page
    if (!user) {
      newUser
        .save()
        .then(() => res.json("User added (they dont already exist)!"))
        .catch((err) => res.status(400).json("Error: " + err));
      res.redirect("/DashboardPage");
    }
  });
}

module.exports = { findUser };
