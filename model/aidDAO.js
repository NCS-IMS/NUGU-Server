'use strict';

var db = require("../config/db");

function select_Solution(parameters){
    let queryData = `SELECT symptom, solution FROM AID_Solution where symptom = ?`;
    return new Promise((resolve, reject)=>{
        db.query(queryData,[parameters.symptom],(err, result)=>{
            if(err){
                console.log(err);
            }
           resolve(result);
        });
    })
}

module.exports = {
    select_Solution
}