const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("http://localhost:3000/home");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    console.log("test");
    res.redirect("http://localhost:3000/home");
  }
};

module.exports = { requireAuth };
