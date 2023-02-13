const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserById = (id) => {
  return db.query('SELECT * FROM db WHERE id = $1', [id])
  .then((response) => {
    return response.rows[0];
  })
}

module.exports = {
  getUsers,
  getUserById,
};
