/**
 * Created by akash on 18/1/15.
 */
var express = require('express');

var dbHelper = require('../database/item_category_db');

var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('hereh');
    dbHelper(req.param('cat'), function (result) {
        res.json(result);
    });

});

module.exports = router;
