// Import required modules
const express = require('express');
const mysql = require('mysql2');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Set up the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Replace with your MySQL username
  password: 'Mn06be7s',  // Replace with your MySQL password
  database: 'geoserver_data'   // Replace with your MySQL database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the MySQL database!');
});

// API: Fetch WMS link and video path based on date and time
app.post('/get-data', (req, res) => {
  const { date, time } = req.body; // Extract date and time from the request body

  if (!date || !time) {
    return res.status(400).send({ error: 'Date and time are required!' });
  }

  // Query to fetch the corresponding WMS link and video path from the database
  const query = `
    SELECT wms_link, video
    FROM time_data 
    WHERE date_col = ? AND time_col = ?
  `;

  db.query(query, [date, time], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(404).send({ error: 'No data found for the given date and time' });
    }

    res.send({
      wms_link: results[0].wms_link,
      video_path: results[0].video_path,
    });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

