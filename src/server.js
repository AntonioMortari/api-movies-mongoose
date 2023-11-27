require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connect to db
try {
    mongoose.connect(process.env.STRING_CONNECTION)
} catch (error) {
    console.log('Erro na conexão', error)
}

// routes
const moviesRoutes = require('./routes/movies.routes')

app.use('/movies', moviesRoutes)

app.listen(3000, () => console.log('Server is Running'))

