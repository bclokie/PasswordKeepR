
DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  site_name VARCHAR(255) NOT NUll,
  site_url VARCHAR(255),
  site_username VARCHAR(255) NOT NUll,
  site_password VARCHAR(255) NOT NULL
  -- FOREIGN KEY(user_id) REFERENCES users(id),
  -- FOREIGN KEY(categories_id) REFERENCES categories(id)
);

-- INSERT INTO passwords
-- (site_name, site_url, site_username, site_password, user_id, categories_id)
-- VALUES
-- ('1', 'google', 'www.google.com', 'cmgg919', 1234, 'cmg', );
