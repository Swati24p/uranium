const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook)  //1

router.get("/getBooksData", BookController.getBooksData)   //2

router.post("/updateBooks", BookController.updateBooks)   //3

router.get("/deleteBooks", BookController.deleteBooks)  //4

router.post("/totalSalesPerAuthor", BookController. totalSalesPerAuthor)  //5



module.exports = router;