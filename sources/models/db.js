import sqlite3 from 'sqlite3';

import dbConfig from "../config/db.config.js";

// Create a connection to the database

let database = new sqlite3.Database("sources/models/names.db", (err) => {
  if (err) {
      console.log('Error when creating the database', err)
  } else {
      console.log('Database created!')
      /* Put code to create table(s) here */
      // createTable()
  }
})


export default database;