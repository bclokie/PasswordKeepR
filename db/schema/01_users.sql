
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id VARCHAR(150) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  login_password text NOT NUll,
  username VARCHAR(255) NOT NUll,

);
