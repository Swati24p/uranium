const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const collectionControllers= require("../controllers/collectionControllers")

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", collectionControllers.createBook1 )

router.get("/bookList", collectionControllers.bookList2 )

router.get("/getBooksInYear", collectionControllers.getBooksInYear5 )

router.get("/getXINRBooks", collectionControllers.getXINRBooks3 )

router.get("/getRandomBooks", collectionControllers.getRandomBooks4 )

router.get("/getParticularBooks", collectionControllers.getParticularBooks6 )


module.exports = router;