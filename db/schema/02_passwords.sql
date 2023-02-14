
DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  site_name VARCHAR(255) NOT NULL,
  site_url VARCHAR(255),
  site_username VARCHAR(255) NOT NULL,
  site_password VARCHAR(255) NOT NULL
  -- user_id REFERENCES users(id) ON DELETE CASCADE,
  -- user_id REFERENCES users(id) ON DELETE CASCADE,
);

-- INSERT INTO passwords
-- (site_name, site_url, site_username, site_password, user_id, categories_id)
-- VALUES
-- ('1', 'google', 'www.google.com', 'cmgg919', 1234, 'cmg', );

-- CREATE TABLE property_reviews (
--   id SERIAL PRIMARY KEY NOT NULL,
--   guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
--   reservation_id INTEGER REFERENCES reservations(id) ON DELETE CASCADE,
--   rating SMALLINT NOT NULL DEFAULT 0,
--   message TEXT
-- );
