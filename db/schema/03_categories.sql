DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  Finance VARCHAR(100) NOT NULL,
  Work VARCHAR(100) NOT NULL,
  SocialMedia VARCHAR(100) NOT NULL,
  News VARCHAR(100) NOT NULL,
  Misc VARCHAR(100) NOT NULL,
  Entertainment VARCHAR(100) NOT NULL
);

-- mentor recommandation --
-- CREATE TABLE users_organisations (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id),
--   organisations_id INTEGER REFERENCES organisations(id)
-- );
