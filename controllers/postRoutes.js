const express = require('express')
const router = express.Router()
const Post = require('../db/models/Post')


// router.get('/posts',(res,req)=>{})

//GET all posts
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => {
            res.json(posts)
        })
    // res.send('working!')
    // const results = Post.find({})
    // results.then((posts) => {
    //     res.render('posts', {posts:posts})
    // })
})

//Create a post
router.post('/', (req, res, next) => {
    Post.create(req.body)
        .then((post) => res.json(post))
        .catch(next)
})

//DELETE a post
router.delete('/:id', (req, res, next) => {
    Post.findByIdAndDelete({ _id: req.params.id })
        .then((deletePost) => res.json(deletePost))
        .catch(next)
})

module.exports = router