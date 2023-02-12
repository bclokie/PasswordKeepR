/*
 * All routes for login are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// login page rendering
router.get('/', (req, res) => {
  res.render('login');
});

// login form post

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // const user = helpers.getUserByEmail(email, users);
  // if (!email || !password) {
  //   return res.status(403).send("Email and password should not be blank");
  // }

  // if (!user) {
  //   return res.status(403).send("User not found");
  // }
  // if (bcrypt.compareSync(password, user.password) === false) {
  //   return res.status(403).send("Bad password");
  // }

  // req.session.user_id = user.id;

  res.redirect("/");
});

// logout route
// router.post("/", (req, res) => {
//   req.session = null;
//   res.redirect("/");
// });

module.exports = router;
