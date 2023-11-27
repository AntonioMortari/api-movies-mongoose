const express = require('express')
const router = express.Router()

// controllers
const MoviesController = require('../controllers/moviesController')
const moviesController = new MoviesController()

router.get('/', moviesController.index)
router.get('/:id', moviesController.show)

router.post('/', moviesController.create)

router.put('/:id', moviesController.update)

router.delete('/:id', moviesController.delete)

module.exports = router