// dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// configuration
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json());

// Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))


// ROUTES
app.get('/', (req, res) => {
    res.send('Innovative Books!! API')
})

// Books
const booksController = require('./controller/books_controller')
app.use('/books', booksController)


// listen
app.listen(PORT, () =>{
    console.log('Greetings!! on port:', PORT)
})