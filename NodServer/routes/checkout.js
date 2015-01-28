/**
 * Created by akash on 18/1/15.
 */

module.exports = function (app) {

    var orderHelper = require('../database/order_items_db');
    app.post('/checkout', function (req, res) {
        if(!req.body) {
            next();
            res.send("Error on data received");
        }

        var order = {
            shippingAddress: req.body.order.address,
            orders: req.body.order.orders,
            username: req.body.order.username,
            phone: req.body.order.phone
        }

        orderHelper(order, function (err) {
            if(err) {
                res.end('Error');
            } else {
                res.end('Sucess');
            }

            require('../utility/caller')(order.shippingAddress);
        });

    })
}


