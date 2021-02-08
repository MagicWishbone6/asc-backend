const mongoose = require('mongoose')
const mongoURI = 
    process.env.NODE_ENV === `production`
        ? process.env.DB_URL
        // : `mongodb://localhost:27017/asc`
        : `mongodb+srv://clamprecht:atlasclammy@cluster0.6kf2m.mongodb.net/asc?authSource=admin&replicaSet=atlas-f955wg-shard-0&readPreference=primary&ssl=true`

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(instance => console.log(`MongoDB: ${instance.connections[0].name}`))
    .catch(error => console.log(`Connection failed`, error));

module.exports = mongoose