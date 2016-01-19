// jshint strict: true
// jshint node: true

'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

/*
Routing and saving players section
 */
var defaultPlayer = {
    name: "Pavlo",
    surname: "Zibrov",
    email: "pavlo@zibrov.ua",
    phone: "380931112233"
};
var players = [defaultPlayer];

app.get('/results', function (req, res) {
    res.json(players);
});

var PORT = 8080;
app.listen(PORT, function () {
    console.log('Lottery server is listening to', PORT);
});
