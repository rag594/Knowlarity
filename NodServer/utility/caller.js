/**
 * Created by akash on 18/1/15.
 */
module.exports = function (phone) {
    var request = require('request');

    request.get("http://dev.knowlarity.com/api/voice/quickCall/?username=shreyans4nahata@gmail.com&password=ucmvxV&ivr_id=800066996&phone_book='" + phone+ "'&format=xml'", function (err, res, body) {
        if(err) {
            console.log(err);
        }
    });

}
