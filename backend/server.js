const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const SERVER_PORT = process.env.PORT || 3000;

require("dotenv").config();
// Create Express App and Routes
const app = express();

app.use(cors());
app.use(express.json());

// Parse URI to connection method
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// Initialise connection to MongoDB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(SERVER_PORT, () =>
  console.log(
    `Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`
  )
);

const usersRouter = require("./routes/user"); // Routes for Users
const projectsRouter = require("./routes/projects"); // Routes for Projects

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
