const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic authentication middleware
app.use(basicAuth({
    users: { 'admin': 'admin' }
}));

// Authentication route
app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    // Implement authentication logic
    if (username === 'admin' && password === 'admin') {
        res.status(200).send('Authorized');
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Add CORS middleware to allow requests from all origins
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
