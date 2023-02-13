
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  login_password text NOT NUll,
  username VARCHAR(255) NOT NUll,

);

ISERT INTO users
(id, email, login_password, username)
VALUES
(1, 'cmgg919@gmail.com', 1234, cmgg)
(2, 'indigo@gmail.com', 1234, cmgg)
(3, 'systane@gmail.com', 1234, cmgg)
(4, 'macbook@gmail.com', 1234, cmgg)
(5, 'asus@gmail.com', 1234, cmgg)

