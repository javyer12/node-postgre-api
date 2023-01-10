'use strict'

const firebase = require('firebase-admin');
const serviceAccount = require("../config/firebase.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://r-contacting-default-rtdb.firebaseio.com",
})

const db = firebase.database();
const Users = require('./user_models');

const newUsers = new Users(db)
module.exports = {
    users: newUsers,
}