const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createBook", BookController.createBook)  //1

router.get("/getBooksData", BookController.getBooksData)   //2

router.post("/updateBooks", BookController.updateBooks)   //3

router.get("/deleteBooks", BookController.deleteBooks)  //4

router.post("/perAuthorsales", BookController. totalSalesPerAuthor)  //5


router.post("/createUser",UserController.createUser)     ///@

router.get("/getUserdata",UserController.getUsersData)   ///B



module.exports = router;