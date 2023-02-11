/*
 * All routes for register are defined here
 * Since this file is loaded in server.js into /register,
 *   these routes are mounted onto /register
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// render registration page

router.get("/", (req, res) => {
  // if (req.session.user_id) {
  //   res.redirect("/urls");
  // }
  // const storeUserId = req.session.user_id;
  // const templateVars = {
  //   user: users[storeUserId],
  // };
  res.render("register");
});


// registration form post

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password
  // const hashedPassword = bcrypt.hashSync(password, 10);
  // if (email === "" || password === "") {
  //   res.status(400).send("Blank fields");
  //   return;
  // }
  // if (helpers.getUserByEmail(email, users)) {
  //   res.status(400).send("email registered already");
  //   return;
  // }
  // res.render('register');
  return res.redirect("/")
});

module.exports = router;
