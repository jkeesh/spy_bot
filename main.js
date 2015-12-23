var request = require('request');
var Twit = require('twit');
var secrets = require('./secrets');

var symbol = 'SPY';

var url = 'http://marketdata.websol.barchart.com/getQuote.json';

var qs = {
    key: secrets.stocks,
    symbols: symbol
};

var T = new Twit(secrets.twitter);

request({
    url: url,
    qs: qs

}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);

        var price = result.results[0].lastPrice;

        var status = symbol + ": $" + price;
        console.log(status);

        T.post('statuses/update', { status: status }, function(err, data, response) {
          console.log(data);
        });
    }

});
