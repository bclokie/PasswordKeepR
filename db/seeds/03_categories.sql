INSERT INTO categories
(Finance, Work, SocialMedia, News, Misc, Entertainment)
VALUES
()

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  Finance VARCHAR(100) NOT NULL,
  Work VARCHAR(100) NOT NULL,
  SocialMedia VARCHAR(100) NOT NULL,
  News VARCHAR(100) NOT NULL,
  Misc VARCHAR(100) NOT NULL,
  Entertainment VARCHAR(100) NOT NULL
);


