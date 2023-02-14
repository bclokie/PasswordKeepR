DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  site_name VARCHAR(255) NOT NUll,
  site_url VARCHAR(255) NOT NULL,
  site_username VARCHAR(255) NOT NUll,
  site_password VARCHAR(255) NOT NUll,
  user_id INT REFERENCES users(id),
  category_id INT REFERENCES categories(id)
);
