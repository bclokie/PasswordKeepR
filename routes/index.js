const { application } = require('express');
const express = require('express');
const router  = express.Router();




// const express = require("express");
// const router = express.Router();
// const userQueries = require("../db/queries/users");
// const bcrypt = require("bcryptjs");


// login page rendering
// router.get("/", (req, res) => {
//   res.render("login");
// });


// // router.get("/register", (req, res, next) => {
// //   res.render("register")
// // });

// router.post("/", (req, res) => {
//   const user = req.body;
//   user.password = bcrypt.hashSync(user.password, 12);
//   userQueries
//     .addUser(user)
//     .then((user) => {
//       if (!user) {
//         res.send({ error: "error" });
//         return;
//       }
//       req.session.userId = user.id;
//       return res.send("🤗");
//     })
//     .catch((e) => res.send(e));
// });

module.exports = router;



