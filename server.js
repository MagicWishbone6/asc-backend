const express = require ('express');
const router = require('./controllers/routes.js')
const app = express();
var port = 8000;

app.set('view engine', 'hbs')
app.listen(port, function() {
    console.log(`App running at localhost: ${port}`)
})

app.use('/', router)

module.exports = app