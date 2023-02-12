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
  // .query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [user.name, user.email, user.password])
  .query('INSERT INTO users (name) VALUES ($1) RETURNING *', [user.name])
  .then((result) => {
    console.log(result.rows[0])
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  })
}
module.exports = {addUser, getUsers};
