const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

router.post("/", (req, res) => {
  const newPassword = req.body.password;
  const passwordId = req.body.password_Id;
  // console.log()
  console.log(newPassword);
  userQueries
    .editPassword(newPassword, passwordId)
    .then(() => {
      return userQueries.getUserPasswords(req.session.user_id);
    })
    .then((passwords) => {
      // res.render("manager", { passwords });
      res.redirect("/manager");
    })
    .catch((e) => res.send(e));
});

module.exports = router;
