const mongoose = require('mongoose')
const uri = `mongodb://localhost/asc`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(instance => console.log(`MongoDB: ${instance.connections[0].name}`))
    .catch(error => console.log(`Connection failed`, error));

module.exports = mongoose