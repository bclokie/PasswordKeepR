
DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  lighthouseLabs VARCHAR(255) NOT NULL,
  Google VARCHAR(255) NOT NULL,
  Facebook VARCHAR(255) NOT NULL,
  Apple VARCHAR(255) NOT NULL,
  Microsoft VARCHAR(255) NOT NULL,
  Github VARCHAR(255) NOT NULL,
  Linkedin VARCHAR(255) NOT NULL
);

-- mentor recommandation --
-- CREATE TABLE organisations (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL
-- );
