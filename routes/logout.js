const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");
const bcrypt = require("bcryptjs");

// logout route
router.post("/", (req, res) => {
  req.session = null;
  return res.redirect("/login");
});

module.exports = router;
