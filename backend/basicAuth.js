function authUser(req, res, next) {
  if (req.body.user == null) {
    res.status(403);
    console.log(req);
    return res.send("You need to sign in");
  }
  console.log(req);
  next();
}

module.exports = {
  authUser,
};
