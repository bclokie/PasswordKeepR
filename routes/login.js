/*
 * All routes for login are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");
const bcrypt = require("bcryptjs");

// login page rendering
router.get("/", (req, res) => {
  res.render("login");
});

//mingun
//register page
// router.get("/register", (req, res, next) => {
//   const {email, password} = req.body;
//   if(!email||password) {
//     return res.status(400).send
//   }
// });



// login form post
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = userQueries.getUserWithEmail(email);
  console.log(user);
  user
    .then((user) => {
      if (!email || !password) {
        return res.status(403).send("Email and password should not be blank");
      }
      if (!user) {
        res.send({ error: "error not a user" });
        return;
      }
      if (bcrypt.compareSync(password, user.password) === false) {
        return res.status(403).send("Bad password");
      }
      req.session.userId = user.id;
      return res.send({
        user: { name: user.username, email: user.email, id: user.id },
      });
    })
    .catch((e) => res.send(e));
});
//////////////
//   if (!email || !password) {
//     return res.status(403).send("Email and password should not be blank");
//   }

//   if (!user) {
//     return res.status(403).send("User not found");
//   }
//   // if (bcrypt.compareSync(password, user.password) === false) {
//   //   return res.status(403).send("Bad password");
//   // }

//   req.session.user_id = user.id;

//   return res.redirect("/");
// });

// logout route
// router.post("/", (req, res) => {
//   req.session = null;
//   res.redirect("/");
// });
///////////////////////////
// /**
//  * Check if a user exists with a given username and password
//  * @param {String} email
//  * @param {String} password encrypted
//  */
// const login = function (email, password) {
//   return userQueries.getUserWithEmail(email).then((user) => {
//     if (bcrypt.compareSync(password, user.password)) {
//       return user;
//     }
//     return null;
//   });
// };
// exports.login = login;

// router.post("/", (req, res) => {
//   const { email, password } = req.body;
//   login(email, password)
//     .then((user) => {
//       if (email || password) {
//         return res.status(403).send("Email and password should not be blank");
//       }
//       if (!user) {
//         res.send({ error: "error not a user" });
//         return;
//       }
//       req.session.userId = user.id;
//       res.send({ user: { name: user.name, email: user.email, id: user.id } });
//     })
//     .catch((e) => res.send(e));
// });

module.exports = router;
