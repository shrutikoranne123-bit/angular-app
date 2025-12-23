const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow Angular to connect

app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is running on AWS EC2!', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});