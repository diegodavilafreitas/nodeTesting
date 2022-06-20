const mysql = require('mysql');

function insert(conection, callback){
    let insertQuery = "INSERT INTO user (nombre,mail) VALUES ('juanjose','juanjose@gmail.com')";

    conection.query(insertQuery, function(err, result){
        if(err){
            throw err;
        }else{
            callback(result);
        }
    })

}

module.exports = {insert}