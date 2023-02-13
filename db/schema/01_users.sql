
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users
(id, email, login_password, username)
VALUES
(1, 'cmgg919@gmail.com', 1234, cmgg)
(2, 'indigo@gmail.com', 1234, cmgg)
(3, 'systane@gmail.com', 1234, cmgg)
(4, 'macbook@gmail.com', 1234, cmgg)
(5, 'asus@gmail.com', 1234, cmgg)

