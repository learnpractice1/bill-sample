const mysql = require('mysql2/promise'); // Use mysql2 (recommended)

const dbConfig = {
  host: "localhost",
  user: "root" ,
  password: "",
  database: "bill",
  connectionLimit: 10, // Recommended: Add a connection limit for pooling
  connectTimeout: 10000 // Timeout in milliseconds (10 seconds)
};

const pool = mysql.createPool(dbConfig); // Use a pool (recommended)

module.exports = pool;