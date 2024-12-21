const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Use body-parser middleware to handle JSON requests
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use user routes
app.use('/api/users', userRoutes);

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
