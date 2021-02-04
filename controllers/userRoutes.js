const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', function(req,res) {
    res.render('index')
})

router.get('/getAll', function(req,res) {
    User.find({}, function(err,users) {
        if (err)
            res.send(err)
        res.json(users)
    })
})

module.exports = router