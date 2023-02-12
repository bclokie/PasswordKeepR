const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// module.exports = { getUsers };

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
 const addUser =  function(user) {
  return db
  .query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [user.username, user.email, user.password])
  // .query('INSERT INTO users (name) VALUES ($1) RETURNING *', [user.name])
  .then((result) => {
    console.log(result.rows[0])
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  })
}


/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
 const getUserWithEmail = function(email) {
  return db
  .query('SELECT * FROM users WHERE email = $1', [email])
  .then((result) => {
    console.log(result.rows[0])
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  })
}

module.exports = {addUser, getUsers, getUserWithEmail};
