const express = require('express');
const router = express.Router();
const allControllers= require("../controllers/allControllers")


router.post("/createBook", allControllers.bookDB )

router.post("/createAuthorDB", allControllers.authorDB )

router.get("/getChetanBooks", allControllers.bookList )

router.get("/getupBookprice", allControllers.priceUpdate )

router.get("/getBetweencost", allControllers.inBetweencost )

module.exports = router;