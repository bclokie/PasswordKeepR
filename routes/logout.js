const express = require("express");
const router = express.Router();

// logout route
router.post("/", (req, res) => {
  req.session = null;
  return res.redirect("/login");
});

module.exports = router;
