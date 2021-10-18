const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const SERVER_PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  credentials: true, // Access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

require("dotenv").config();
// Create Express App and Routes
const app = express();
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json());

// Allows us to return responses to the front-end when requests to the APIs are made
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Cookie parser middleware so that we can use JWT Tokens
app.use(cookieParser());

// Parse Mongoose URI to connection method
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// Initialise connection to MongoDB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Establish Express Server
app.listen(SERVER_PORT, () =>
  console.log(
    `Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`
  )
);

// Define Routes
const usersRouter = require("./routes/user"); // Routes for Users
const projectsRouter = require("./routes/projects"); // Routes for Projects
const groupsRouter = require("./routes/groups"); // Routes for Projects

// Use Routes
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/groups", groupsRouter);
