/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');
const db = require('../db/connection');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.render('users',{users});  //MPA
      res.json({ users });          //SPA
    })
    // .catch(err => {
    //   res
    //     .status(500)
    //     .json({ error: err.message });
    // });
});

// get / users/:id
router.get('/:id', (req, res, next) => {
  const userID = req.params.id;
  userQueries.getUserById(userID)
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
