// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const fs = require('fs');

app.use(cors());

// Sample JSON data
const jsonData = {
  "locations": [
    { "position": [28.6139, 77.209], "title": "Delhi", "description": "Crate Count:- 500" },
    { "position": [19.076, 72.8777], "title": "Mumbai", "description": "Crate Count:- 200" },
    { "position": [12.9716, 77.5946], "title": "Bangalore", "description": "Crate Count:- 400" },
    { "position": [20.932, 77.7523], "title": "Amravati", "description": "Crate Count:- 600" },
    { "position": [23.2599, 77.4126], "title": "Bhopal", "description": "Crate Count:- 100" },
    { "position": [22.5726, 88.3639], "title": "Kolkata", "description": "Crate Count:- 300" },
    { "position": [13.0827, 80.2707], "title": "Chennai", "description": "Crate Count:- 50" },
    { "position": [17.385, 78.4867], "title": "Hyderabad", "description": "Crate Count:- 100" },
    { "position": [17.3700, 78.4473], "title": "Karwan", "description": "Crate Count: 50" },
    { "position": [17.4626, 78.4351], "title": "Balanagar", "description": "Crate Count: 75" },
    { "position": [17.4009, 78.4106], "title": "Miyapur", "description": "Crate Count: 60" },
    { "position": [17.4531, 78.3802], "title": "Kukatpally", "description": "Crate Count: 85" }
  ]
};

// Serve JSON data as an API endpoint
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// Alternatively, serve JSON from a file
app.get('/api/filedata', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
