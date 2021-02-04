const express = require('express')
const router = express.Router()
const Post = require('../db/models/Post')

router.get('/', (req,res) => {
    const results = Post.find({})
    results.then((posts) => {
        res.render('posts/index', {posts:posts})
    })
})

module.exports = router