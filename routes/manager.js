const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

// main page rendering
// router.get("/", (req, res) => {
//   userQueries
//     .getPasswords()
//     .then((passwords) => {
//       res.render("manager", { passwords });
//     })
//     .catch((e) => {
//       console.error(e);
//       res.send(e);
//     });
// });

router.get("/", (req, res) => {
  userQueries
    .getUserPasswords(req.session.user_id)
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
  passwordInfo.owner_id = req.session.user_id;
  // Check if any required fields are missing
  if (
    !passwordInfo.siteName ||
    !passwordInfo.siteURL ||
    !passwordInfo.username ||
    !passwordInfo.password
  ) {
    return res
      .status(400)
      .send({ error: "Please fill in all required fields." });
  }
  userQueries
    .addPassword(passwordInfo)
    .then(() => {
      return userQueries.getUserPasswords(req.session.user_id);
    })
    .then((passwords) => {
      res.render("manager", { passwords });
    })
    .catch((e) => res.send(e));
});

module.exports = router;

// Test
