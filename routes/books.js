const router = require('express').Router()
const booksCtrl = require('../controllers/books.js')

router.post('/', booksCtrl.create)
router.get('/', booksCtrl.index)
router.put('/:bookId', booksCtrl.update)

module.exports = router