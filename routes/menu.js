var express = require('express')
var router = express.Router();

router.get('/', (req, res, next)=>{
    console.log(req.body);
})

router.post("/answer.Menu", (req, res, next)=>{
    console.log(req.body);
    var obj = req.body;
    var action = req.body.action.parameters;
    var date = action.questionDate.value;
    var menu = action.questionMenu.value;
    console.log(date);
    console.log(menu);

    obj.resultCode = "OK";
    obj.output = {"date": "점심", "menuContext":"화딱"};
    res.send(obj)
    res.end
})


module.exports = router;