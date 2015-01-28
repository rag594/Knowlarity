/**
 * Created by akash on 18/1/15.
 */
module.exports = function (category, callback) {
    var mysql = require('mysql');
    var conn = require('./config');

    var connection = mysql.createConnection(conn);

    var query = "SELECT * FROM cat1 WHERE cat = ?";
    query = mysql.format(query,[category]);

    connection.query( query , function (err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
            callback(result);
        }
    })

}
