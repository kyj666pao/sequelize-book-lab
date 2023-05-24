const router = require('express').Router()
const booksCtrl = require('../controllers/books.js')

router.post('/', booksCtrl.create)

module.exports = router