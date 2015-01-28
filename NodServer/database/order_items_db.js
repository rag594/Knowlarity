/**
 * Created by akash on 18/1/15.
 */
module.exports = function (order, callback) {
    var mysql = require('mysql');
    var conn = require('./config');

    var connection = mysql.createConnection(conn);

    order.orders.map(function (ord) {

        var query1 = "insert into gifts values (?,?,?,?,?,?,?) ";
        var query2 = "UPDATE cat1 SET quant = ? where item = ?";

        var query = query1 + ';' + query2;

        console.log('Here order is ',order);

        var q = connection.query(query1, [
            order.shippingAddress,
            ord.desc,
            ord.quantity,
            ord.price,
            ord.cat,
            order.username,
            order.phone
        ], function (err,result) {
            if(err) {
                console.log(err);
                callback(err);
            }
            callback(null);
        });

            console.log(q.sql);

        query2 = mysql.format(query2,[ord.newQuant,ord.desc]);

        var q2 = connection.query(query2,function (err) {
            if(err)
                console.log(err);
        });

        console.log(q2.sql);

    })
}
