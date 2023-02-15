const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

router.post("/", (req, res) => {
  const newPassword = req.body;
  console.log(newPassword);
  passwordInfo.owner_id = req.session.user_id;
  userQueries
    .editPassword(passwordInfo)
    .then(() => {
      return userQueries.getUserPasswords(req.session.user_id);
    })
    .then((passwords) => {
      res.render("manager", { passwords });
    })
    .catch((e) => res.send(e));
});

module.exports = router;
