/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const userRouter  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/login', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users }); //SPA
      res.render('users',{users}); //MPA
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = userRouter;
