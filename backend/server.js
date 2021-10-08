const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const mongoose = require("mongoose");
const SERVER_PORT = process.env.PORT || 5000;

require("dotenv").config();
// Create Express App and Routes
const app = express();

app.use(cors());
app.use(express.json());

// Cookie parser middleware
app.use(cookieParser());

// Parse Mongoose URI to connection method
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// Initialise connection to MongoDB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  initial();
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
// Use Routes
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

const Role = require("./models/role.model");
// Create Access roles if not already created upon server start
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
