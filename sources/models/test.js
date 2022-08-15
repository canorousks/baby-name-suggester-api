sqlite3.Database("sources/models/names.db", (err) => {
    if (err) {
        console.log('Error when creating the database', err)
    } else {
        console.log('Database created!')
        /* Put code to create table(s) here */
        // createTable()
    }
  })