const mysql = require('mysql2/promise'); // Use mysql2 (recommended)


// copy this code and paste it in db.js
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
  connectionLimit: 10, // Recommended: Add a connection limit for pooling
  connectTimeout: 10000 // Timeout in milliseconds (10 seconds)
};


const pool = mysql.createPool(dbConfig); // Use a pool (recommended)

module.exports = pool;