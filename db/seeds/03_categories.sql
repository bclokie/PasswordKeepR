INSERT INTO categories
(Finance, Work, SocialMedia, News, Misc, Entertainment)
VALUES
('yahoo finance','Linkedin','Tweeter','cbc news','cruncyroll','disneyplus')

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  Finance VARCHAR(100) NOT NULL,
  Work VARCHAR(100) NOT NULL,
  SocialMedia VARCHAR(100) NOT NULL,
  News VARCHAR(100) NOT NULL,
  Misc VARCHAR(100) NOT NULL,
  Entertainment VARCHAR(100) NOT NULL
);


-- INSERT INTO users_organisations (user_id, organisations_id) VALUES (1, 1);
-- INSERT INTO users_organisations (user_id, organisations_id) VALUES (1, 2);
-- INSERT INTO users_organisations (user_id, organisations_id) VALUES (2, 3);
-- INSERT INTO users_organisations (user_id, organisations_id) VALUES (3, 3);
-- INSERT INTO users_organisations (user_id, organisations_id) VALUES (4, NULL);
