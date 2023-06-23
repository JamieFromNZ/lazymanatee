const express = require('express');
const path = require('path');
const app = express();

const initFirebase = require('./initFirebase');
//let firebase = initFirebase();

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set template html thingy to EJS
app.set('view engine', 'ejs');

// Public folder contains js, css, images
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.render('index');
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000, http://localhost:3000');
});