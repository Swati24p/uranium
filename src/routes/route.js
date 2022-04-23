const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Auth= require("../middleware/auth")



router.post("/users", userController.createUser)          //1...

router.post("/login", userController.loginUser)           //2...

//The userId is sent by front end
router.get("/users/:userId",Auth.validateToken, userController.getUserData)       //3...
router.put("/users/:userId",Auth.validateToken, userController.updateUser)        //4...

router.delete('/users/:userId',Auth.validateToken, userController.deleteUser)        //5...
router.post("/users/:userId/posts",Auth.validateToken, userController.postMessage)    //6...



module.exports = router;