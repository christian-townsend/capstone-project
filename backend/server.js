const express = require("express");
const msal = require("@azure/msal-node");

const SERVER_PORT = process.env.PORT || 3000;

// Create Express App and Routes
const app = express();

app.listen(SERVER_PORT, () =>
  console.log(
    `Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`
  )
);

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

app.get("/", (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: "http://localhost:3000/redirect",
  };

  // get url to sign user in and consent to scopes needed for application
  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => console.log(JSON.stringify(error)));
});

app.get("/redirect", (req, res) => {
  const tokenRequest = {
    code: req.query.code,
    scopes: ["user.read"],
    redirectUri: "http://localhost:3000/redirect",
  };

  cca
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      console.log("\nResponse: \n:", response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});
