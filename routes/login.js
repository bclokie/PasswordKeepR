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



module.exports = router;
