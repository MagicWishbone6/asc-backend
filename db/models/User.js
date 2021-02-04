const mongoose = require('../connection')

const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    bio: String,
    status: String,
    // profilePic: 
})

const User = mongoose.model('User', UserSchema)

module.exports = User