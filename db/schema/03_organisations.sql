
DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(150) NOT NULL,
  lighthouseLabs VARCHAR(255) NOT NULL,
  Google VARCHAR(255) NOT NULL,
  Facebook VARCHAR(255) NOT NULL,
  Apple VARCHAR(255) NOT NULL,
  Microsoft VARCHAR(255) NOT NULL,
  Github VARCHAR(255) NOT NULL,
  Linkedin VARCHAR(255) NOT NULL
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES "users"(id) ON DELETE CASCADE ON UPDATE CASCADE
);
/*
the user table's id value is constrained to refer to the "organizations" table's "user_id" as a foreign key.
If this condition (ON DELETE CASCADE ON UPDATE CASCADE) is not specified, deletion or modification will not occur if constraint validation fails.
*/

