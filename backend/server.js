const express = require("express");
const msal = require("@azure/msal-node");
const { IdToken } = require("@azure/msal-common");

const SERVER_PORT = process.env.PORT || 3000;

// Create Express App and Routes
const app = express();

app.listen(SERVER_PORT, () =>
  console.log(
    `Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`
  )
);

const usersRouter = require("./routes/user");

app.use("/users", usersRouter);
