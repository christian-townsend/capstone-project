require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  //const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  // Parse the cookies on the request
  var cookies = cookie.parse(req.headers.cookie || "");

  // Get the visitor name set in the cookie
  var name = cookies.name;
  token = req.cookie("accessToken");
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.token = token;
    next();
  });
}

module.exports = {
  authenticateToken,
};
