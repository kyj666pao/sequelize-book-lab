const { Book } = require('../models')

const create = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

const index = async (req, res) => {
    try {
        const books = await Book.findAll()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    create,
    index,
}