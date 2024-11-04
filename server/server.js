// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
