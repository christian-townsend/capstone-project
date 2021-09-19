const router = require("express").Router();
let User = require("../models/user.model");
const msal = require("@azure/msal-node");
const { IdToken } = require("@azure/msal-common");

// Before running the sample, you will need to replace the values in the config,
// including the clientSecret
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
    redirectUri: "http://localhost:3000/users/redirect",
  };

  // Get url to sign user in and consent to scopes needed for application
  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => console.log(JSON.stringify(error)));
});

// Re-direct after attempted authentication
router.route("/redirect").get((req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["user.read"],
    redirectUri: "http://localhost:3000/users/redirect",
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

      newUser
        .save()
        .then(() => res.json("User added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
