const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController = require('../controllers/developerController')

const { route } = require('express/lib/application');



router.post("/batches", batchController.batchDB  )

router.post('/developers', developerController.developerDB)


router.get('/scholarship-developers', developerController.scholarDeveloper)

router.get('/developers', developerController.Developer)

module.exports = router;