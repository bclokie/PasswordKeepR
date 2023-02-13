const express = require('express');
const router  = express.Router();
const userQueries = require("../db/queries/users");

// main page rendering
router.get("/", (req, res) => {
  res.render("manager");
});

// Create a new password
// router.post("/", (req, res) => {
//   const passwordInfo = req.body;
//   console.log(passwordInfo)
//   userQueries
//     .addPassword(passwordInfo)
//     .then((passwordInfo) => {
//       if (!passwordInfo) {
//         res.send({ error: "error" });
//         return;
//       }
//       req.session.userId = user.id;
//       return res.send("🤗");
//     })
//     .catch((e) => res.send(e));
// });




module.exports = router;
