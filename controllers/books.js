const { Book } = require('../models')
const book = require('../models/book')

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

const update = async (req, res) => {
    try {
        const { bookId } = req.params
        console.log(bookId)
        const book = await Book.update(
            req.body, {
                where: { id: bookId },
                returning: true
            }
        ) 
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const { bookId } = req.params
        // const numOfRowsRemoved = await Book.destroy(
        //     { where: { id: bookId }}
        // )
        const book = await Book.findByPk(bookId)
        await book.destroy()
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {
    create,
    index,
    update,
    delete: deleteBook
}