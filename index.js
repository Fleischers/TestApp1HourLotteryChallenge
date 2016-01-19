var express = require('express');
var app = express();

app.use(express.static('public'));

var PORT = 8080;
app.listen(PORT, function () {
    console.log('Lottery server is listening to', PORT);
});
