const { initializeApp } = require('firebase/app');
require('dotenv').config();

function initFirebase() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: "oscar-d1c79.firebaseapp.com",
        projectId: "oscar-d1c79",
        storageBucket: "oscar-d1c79.appspot.com",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    };

    // Initialize Firebase
    let firebase = initializeApp(firebaseConfig);

    return firebase
}

module.exports = initFirebase;