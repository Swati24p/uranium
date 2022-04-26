const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const citiesController = require("../controllers/citiesController")
const memesController = require("../controllers/memesController")


//1...
router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/districtId", CowinController.getVaccinationSession)


//2...
router.get("/openweather/getweather",citiesController.getweather)

router.get("/openweather/getsortcitiestemp",citiesController.getsortcitiestemp)


//3...
router.get("/createMeme", memesController.createMeme)





module.exports = router;