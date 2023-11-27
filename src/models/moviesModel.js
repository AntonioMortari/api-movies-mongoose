const mongoose = require('mongoose')

// create schema
const MoviesSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    image_url: { type: String, require: false },
    trailer_url: { type: String, require: false }
})

// create model
const Movies = mongoose.model('Movies', MoviesSchema)

module.exports = Movies