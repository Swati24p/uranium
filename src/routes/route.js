const express = require('express');
const router = express.Router();
const newController = require("../controllers/newController")


router.post("/createAuthor", newController.createAuthorDB  )

router.post("/createPublisher", newController.createPublisherDB  )

router.post("/createBooksData", newController.BooksDB)

router.get("/getBooksWithAuthorDetails", newController.BooksWithAuthorDetails)

router.put("/putTrueBookspublisher", newController.trueBookspublisher)

router.put("/putUpdateBookprice", newController.updateBookprice)

module.exports = router;