const express = require('express');
const path = require('path');
const app = express();

const initFirebase = require('./initFirebase');
let firebase = initFirebase();

// Public folder contains js, css, images
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.render('index');
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000, http://localhost:3000');
});