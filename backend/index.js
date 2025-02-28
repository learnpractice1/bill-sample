
const dotenv = require('dotenv');
dotenv.config();
// index.js
const express = require('express');
const app = express();
const routes = require('./routes/mainRoute');
const pool = require('./config/db'); // Initialize Database connection
const cors = require('cors');
const morgan = require('morgan');

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Frontend UR
}));
app.use(morgan('dev'));
app.use(express.json()); // Enable parsing of JSON request bodies

// Routes
app.use('/', routes); // Use the combined routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Handle graceful shutdown (optional, but good practice)




// process.on('SIGINT', () => {
//     console.log('Shutting down gracefully...');
//     pool.end().then(() => { // Close database connection
//         console.log('Database connection closed.');
//         process.exit(0);
//     });
// });