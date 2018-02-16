var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

// This piece of code is telling Node.js to return 
// the static index.html file from the public folder 
// for any non-static requests. This is necessary 
// for the Angular routing. Most functions in Express 
// use a similar pattern with a function containing 
// the req (request) object and res (response) object.
app.use(function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(2319, function () {
    console.log('Our app is listening on port 2319!');
});
