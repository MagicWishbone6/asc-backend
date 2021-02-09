const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

//get all users
router.get('/users', (req,res) => {
    const results = User.find({})
    results.then((users) => {
        res.render('users/index', {users:users})
    })
})

//get users by id
router.get('/users/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
})

//create a user
router.post('/users', (req, res, next) => {
    User.create(req.body)
        .then((user) => res.json(user))
        .catch(next)
})

module.exports = router