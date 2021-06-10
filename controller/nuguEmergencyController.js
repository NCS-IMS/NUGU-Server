'use strict';

var aidDAO = require("../model/aidDAO");
function requestAid(req, res, next){
    var obj = req.body;
    var action = obj.action.parameters;
    var symptom = action.requestAID.value;
    console.log(action);

    var parameters = {
        "symptom" : symptom
    }

    aidDAO.select_Solution(parameters).then(
        (db_data)=>{
            var json = JSON.stringify(db_data[0]);
            json = JSON.parse(json);
            console.log(json);
            obj.resultCode = "OK";
            obj.output = json;
            res.send(obj)
            res.end
        }
    ).catch(err =>{
        obj.resultCode = "error_symp";
        //console.log(err);
        res.send(obj);
        res.end;
    })

}

module.exports = {
    requestAid
};