// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Critical for Angular communication

const PORT = 3000;
const HOST = '0.0.0.0'; // Add this line

app.get('/api/data', (req, res) => {
  res.json({ message: "Success! Backend reached." });
});

// Update this line:
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});