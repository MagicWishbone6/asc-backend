const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req,res) => {
    const results = User.find({})
    results.then((users) => {
        res.render('users/index', {users:users})
    })
})

module.exports = router