var express = require('express');
var router = express.Router();

var nuguEmergencyController = require("../controller/nuguEmergencyController");

router.get('/', (req, res, next)=>{
    console.log(req.body);
})

router.post("/answer.emergency", nuguEmergencyController.requestAid);

module.exports = router;