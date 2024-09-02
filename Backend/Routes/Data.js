const router = require("express").Router();
const axios = require("axios");
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue } = require("firebase/database");
const admin = require('firebase-admin');
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

const serviceAccount = require('./creds.json');
const firebaseapp = initializeApp(firebaseConfig);
// const db = getDatabase(firebaseapp);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.databaseURL
});

admin.database().ref().once('value')
.then(snapshot => {
    const data = snapshot.val();
    console.log(data);
})

router.route("/Data").get((req, res) => {
    admin.database().ref().once('value')
   .then(snapshot => {
    const data = snapshot.val();
    res.json(data);
   })
   .catch(error => {
    console.error(error);
    res.status(500).send('Error retrieving data from database');
   });
});