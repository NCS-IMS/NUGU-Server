var express = require('express')
var router = express.Router();

router.get('/', (req, res, next)=>{
    console.log(req.body);
})


module.exports = router;