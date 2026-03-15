const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoints
app.post('/api/save', (req, res) => {
    // Logic for saving data goes here
    res.json({ message: 'Data saved successfully!' });
});

app.get('/api/load', (req, res) => {
    // Logic for loading data goes here
    res.json({ message: 'Data loaded successfully!' });
});

app.get('/api/status', (req, res) => {
    // Logic for checking status goes here
    res.json({ message: 'Server is running smoothly!' });
});

app.listen(PORT, () => {
    console.log(`Express app listening on port ${PORT}`);
});
