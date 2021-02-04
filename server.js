const express = require ('express');
const router = require('./controllers/userRoutes.js')
const app = express();
const cors = require('cors')

app.use(cors())
var port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set('view engine', 'hbs')
app.listen(port, function() {
    console.log(`App running at localhost: ${port}`)
})

app.use('/', router)

module.exports = app