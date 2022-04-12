const express = require('express');
const router = express.Router();
const bookPath = require('../controllers/randomController')
const bookdata = require("../shelfs/bookshelfs");


router.post('/postBook', bookPath.addBookDEtails);

router.get('/getbookDetails', bookPath.getBookData);

module.exports = router;