// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db
  .connect()
  .then()
  .catch()

  try{
    await db.connect()
  } catch (e){

  }
module.exports = db;
