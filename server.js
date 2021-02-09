const express = require ('express');
const app = express();
const cors = require('cors')


app.set('view engine', 'hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())

// routes start

const userController = require(`./controllers/userRoutes.js`)
const postController = require(`./controllers/postRoutes.js`)

app.get('/', (req,res) => {
    res.render('index.hbs')
})

app.use('/users', userController)
app.use('/posts', postController)

// routes stop

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App running at: ${port}`)
})

module.exports = app