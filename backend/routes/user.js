const router = require("express").Router();
let User = require("../models/user.model");
const msal = require("@azure/msal-node");
const { IdToken } = require("@azure/msal-common");
// const { requireAuth } = require("../middlewares/authMiddleware");
const jwt = require("jsonwebtoken");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./localStorage");
require("dotenv").config();

const config = {
  auth: {
    clientId: "24acc49b-bb41-4392-b792-33df1647b7bb",
    authority:
      "https://login.microsoftonline.com/24529be3-b781-4599-896e-b8b0ec2c5464",
    clientSecret: "D2sJ4YCJgVdID921jyqGe4.5o-D~e1P4-9",
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
};

// Create msal application object
const cca = new msal.ConfidentialClientApplication(config);

router.route("/").get((req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: "http://localhost:5000/users/redirect",
  };

  // Get url to sign user in and consent to scopes needed for application
  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
      console.log(response);
    })
    .catch((error) => console.log(JSON.stringify(error)));
});

// Re-direct after attempted authentication ///
router.route("/redirect").get((req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["user.read"],
    redirectUri: "http://localhost:5000/users/redirect",
  };

  cca
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      console.log("\nResponse: \n:", response);

      const email = response.account.username; // Set user's email
      const [username] = response.account.username.split("@"); // Set user's username
      const [first_name, last_name] = response.account.name.split("."); // Set user's first and surname
      var student = false; // Boolean for student flag
      var uc_staff = false; // Boolean for UC staff flag

      if (email.startsWith("u")) {
        student = true; // If email begins with "u", user is a student
        uc_staff = false; // Set uc staff to false
        industry_sponsor = false; // Set to false
      }

      const newUser = new User({
        email,
        username,
        first_name,
        last_name,
        student,
        uc_staff,
      });

      User.findOne({
        username: username,
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        const maxAge = 1 * 24 * 60 * 60;
        // If user already exists, re-direct them to the Dashboard page
        if (user) {
          const jwtAccessToken = jwt.sign(
            newUser.toJSON(),
            process.env.ACCESS_TOKEN_SECRET
          );

          console.log(jwtAccessToken);

          res.cookie("jwt", jwtAccessToken, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });

          localStorage.setItem("username", username);

          res.redirect("http://localhost:3000/dashboard");
        }

        // Add the new user if they dont already exist, and re-direct them to the Dashboard page
        if (!user) {
          const jwtAccessToken = jwt.sign(
            newUser.toJSON(),
            process.env.ACCESS_TOKEN_SECRET
          );

          res.cookie("jwt", jwtAccessToken, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });

          newUser
            .save()
            .then(() => res.json("User added (they dont already exist)!"))
            .catch((err) => res.status(400).json("Error: " + err));
          console.log(req.session);
          res.redirect("http://localhost:3000/dashboard");
        }
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

////////////////////////////////////////////////

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/// Get user information
router.route("/getUser").get((req, res) => {
  console.log("looking for user");
  const userid = localStorage.getItem("username");
  User.findOne({ username: userid }).then((doc) => {
    console.log(doc);
    res.json(doc);
  });
});

module.exports = router;
