const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const reviewController = require('../controller/reviewController')
const { authenticate, authorize } = require('../middleware/middleWare')

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ---------User's APIs------------
router.post('/register', userController.createUser)

router.post('/login', userController.userlogin)

// ---------Book's APIs-------------
router.post('/books', bookController.createBook)

router.get('/books',authenticate, bookController.getBooks)

router.get('/books/:bookId', authenticate, bookController.getBookById)

router.put('/books/:bookId', authenticate, authorize, bookController.updateBook)

router.delete('/books/:bookId', authenticate,authorize, bookController.deleteBookById)

// ----------Review's APIs------------
router.post('/books/:bookId/review', authenticate, reviewController.createReview)

router.put('/books/:bookId/review/:reviewId', authenticate,reviewController.updateReview)

router.delete('/books/:bookId/review/:reviewId', authenticate, reviewController.deleteReview)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


module.exports = router