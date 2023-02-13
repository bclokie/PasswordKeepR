const express = require('express');
const router  = express.Router();

// main page rendering
router.get("/", (req, res) => {
  res.render("manager");
});



module.exports = router;
