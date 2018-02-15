var express = require('express');

// instantiate express
var app = express();

// set up REST responses
app.get('/', function(req, res) {
    res.send('Hello from Express!');
});

//start the sever
app.listen(3000, function() {
    console.log("Express running on port 3000.");
});