const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;