const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getPasswords = () => {
  return db.query("SELECT * FROM passwords;").then((data) => {
    // console.log(data.rows);
    return data.rows;
  });
};

const getUserPasswords = (userId) => {
  return db
    .query("Select * FROM passwords WHERE owner_id = $1 ORDER BY id;", [userId])
    .then((result) => {
      // console.log("####", result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
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
      // console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const editPassword = function (password, passwordID) {
  return db
    .query(
      "UPDATE passwords SET  site_password = $1 WHERE id = $2 RETURNING *",
      [password, passwordID]
    )
    .then((result) => {
      console.log(result.rows);
      return result.rows;
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
      // console.log(result.rows[0]);
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
 * @param {{site_name: string, site_url: string, site_username: string, site_password: string}} password
 * @return {Promise<{}>} A promise to the user.
 */
const addPassword = function (password) {
  return db
    .query(
      "INSERT INTO passwords (owner_id, site_name, site_url, site_username, site_password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        password.owner_id,
        password.siteName,
        password.siteURL,
        password.username,
        password.password,
      ]
    )
    .then((result) => {
      // console.log("##!", result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });
};

const getUserById = (id) => {
  return db.query("SELECT * FROM db WHERE id = $1", [id]).then((response) => {
    return response.rows[0];
  });
};

module.exports = {
  addUser,
  getUsers,
  getUserWithEmail,
  getUserById,
  addPassword,
  getPasswords,
  getUserPasswords,
  editPassword,
};
