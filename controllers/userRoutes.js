const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req,res) => {
    const results = User.find({})
    results.then((users) => {
        res.render('users/index', {users:users})
    })
})

router.get('/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
})
module.exports = router