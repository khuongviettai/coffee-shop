const express = require('express')

const notificationFirebase = express.Router();

notificationFirebase.get('/', function(req, res) {
    res.status(200).send({
        Notification: 'this is Notification'
    })
})

module.exports = notificationFirebase;