const router = require('express').Router()
const booksCtrl = require('../controllers/books.js')

router.post('/', booksCtrl.create)
router.get('/', booksCtrl.index)

module.exports = router