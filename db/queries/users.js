const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  return db
    .query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [user.username, user.email, user.password]
    )
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  return db
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
  // .then((users) => {
  //   res.json(users); //SPA
  // });
};

/**
 * Add a new password to the database for certain user.
 * @param {{site_name: string, site_url: string, site_username: string, site_password}} password
 * @return {Promise<{}>} A promise to the user.
 */
 const addPassword = function (password) {
  return db
    .query(
      "INSERT INTO passwords (site_name, site_url, site_username, site_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [password.site_name, password.site_username, password.site_username, password.site_password]
    )
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUserById = (id) => {
  return db.query("SELECT * FROM db WHERE id = $1", [id]).then((response) => {
    return response.rows[0];
  });
};

module.exports = { addUser, getUsers, getUserWithEmail, getUserById, addPassword };
