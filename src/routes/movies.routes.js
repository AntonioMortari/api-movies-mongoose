const express = require('express')
const router = express.Router()

// controllers
const MoviesController = require('../controllers/moviesController')
const moviesController = new MoviesController()

// middlewares
const upload = require('../middlewares/multer')

router.get('/', moviesController.index)
router.get('/:id', moviesController.show)

router.post('/', upload.single('file'), moviesController.create)

router.put('/:id', upload.single('file'), moviesController.update)

router.delete('/:id', moviesController.delete)

module.exports = router