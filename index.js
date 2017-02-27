// Require the client
var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
        'Jou3IFs2X_mO2KhGdMyRXtuWrcLJDpuS_Jfx_d30',
        'O6SGGpJxDSVIYX4QQ_pU2COdWpcHObg3hO-Mqb-x'
        );

// predict the contents of an image by passing in a url
var img = 'http://c1.staticflickr.com/6/5538/31228545081_7cec6bbff5_k.jpg';
//var img = 'http://c1.staticflickr.com/1/543/31546685995_87ad509c26_k.jpg';

app.models.predict(Clarifai.GENERAL_MODEL, img).then(
    function (response) {
        console.log(JSON.stringify(response));
    },
    function (err) {
        console.error(err);
    }
);
 