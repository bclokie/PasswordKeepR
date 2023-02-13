
DROP TABLE IF EXISTS passwords CASCADE;

CREATE TABLE passwords (
  id SERIAL PRIMARY KEY,
  site_name VARCHAR(255) NOT NUll,
  site_url VARCHAR(255),
  site_username VARCHAR(255) NOT NUll,
  site_password SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR(150) NOT NULL,
  categories_id VARCHAR(150) NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES "users"(id) ON DELETE CASCADE ON UPDATE CASCADE
  CONSTRAINT fk_categories_id FOREIGN KEY(categories_id) REFERENCES "categories"(id) ON DELETE CASCADE ON UPDATE CASCADE
);
/*
the user table's id value is constrained to refer to the "passwords" table's "user_id" & "categories_id" as a foreign key.
If this condition (ON DELETE CASCADE ON UPDATE CASCADE) is not specified, deletion or modification will not occur if constraint validation fails.
*/

