const express = require('express');
const Book = require('../../models/Book');
const router = express.Router();

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route   POST api/books
// @desc    Add a new book
// @access  Public
router.post('/post', (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    // Add other properties as needed
  });

  newBook.save()
    .then(book => res.json(book))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

module.exports = router;
