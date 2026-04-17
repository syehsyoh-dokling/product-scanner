const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data for routes
const products = [];
const scanHistory = [];

// Routes
app.get('/scan', (req, res) => {
    // Logic for scanning
    res.send('Scanning...');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/history', (req, res) => {
    res.json(scanHistory);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
