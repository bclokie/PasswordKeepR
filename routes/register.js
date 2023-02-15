/*
 * All routes for register are defined here
 * Since this file is loaded in server.js into /register,
 *   these routes are mounted onto /register
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");
const bcrypt = require("bcryptjs");

// render registration page

router.get("/", (req, res) => {
  return res.render("register");
});

// registration form post

// router.post('/', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password
//   const hashedPassword = bcrypt.hashSync(password, 10);
//   if (email === "" || password === "") {
//     res.status(400).send("Blank fields");
//     return;
//   }
//   // if (helpers.getUserByEmail(email, users)) {
//   //   res.status(400).send("email registered already");
//   //   return;
//   // }
//   // userQueries.getUsers

//   req.session.user_id = email; //temporary for testing
//   return res.redirect("/")
// });

// Create a new user
router.post("/", (req, res) => {
  const user = req.body;
  if (!user.password || !user.email || !user.username || !user.organization) {
    return res.send({
      error: "require an email, password, username, and password",
    });
  }
  userQueries.getUserWithEmail(user.email).then((result) => {
    if (result) {
      return res.send({
        error: "email already registered",
      });
    }
  });

  user.password = bcrypt.hashSync(user.password, 12);
  userQueries
    .addUser(user)
    .then((user) => {
      if (!user) {
        res.send({ error: "error" });
        return;
      }
      req.session.user_id = user.id;
      // req.session.username = username;
      // res.locals.user_id = res.session.user_id;
      return res.redirect("manager");
    })
    .catch((e) => res.send(e));
});

module.exports = router;
