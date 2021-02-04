const express = require('express')
const router = express.Router()
const Post = require('../db/models/Post')
const User = require('../db/models/User')

router.get('/', function(req,res) {
    res.render('index')
})

router.get('/getAll', function(req,res) {
    Post.find({}, function(err,posts) {
        if (err)
            res.send(err)
        res.json(users)
    })
})

module.exports = router