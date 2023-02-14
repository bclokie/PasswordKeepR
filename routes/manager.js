const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

// main page rendering
router.get("/", (req, res) => {
  userQueries
    .getPasswords()
    .then((passwords) => {
      res.render("manager", { passwords });
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Create a new password
router.post("/", (req, res) => {
  const passwordInfo = req.body;
  userQueries
    .addPassword(passwordInfo)
    .then((data) => {
      console.log("## data", data);
      if (!data) {
        res.send({ error: "error" });
        return;
      }
      // req.session.userId = user.id;
      return res.render("manager");
    })
    .catch((e) => res.send(e));
});

module.exports = router;
