require('dotenv').config()
const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === `production`
        ? process.env.DB_URL
        : `mongodb+srv://${process.env.ATLAS_U}:${process.env.ATLAS_P}@cluster0.6kf2m.mongodb.net/asc?authSource=admin&replicaSet=atlas-f955wg-shard-0&readPreference=primary&ssl=true`
        // console.log(mongoURI)
        // console.log(process.env.ATLAS_P)
        console.log(require('dotenv').config())

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(instance => console.log(`MongoDB: ${instance.connections[0].name}`))
    .catch(error => console.log(`Connection failed`, error));

module.exports = mongoose