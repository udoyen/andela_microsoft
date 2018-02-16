var express = require('express');
var app = express();


// Serve up static files from a directory called public
app.use(express.static('public'));
app.use('/angular', express.static('node_modules/angular'));
app.use('**/bootstrap', express.static('node_modules/bootstrap'));
app.use('/app', express.static('app'));

// Launch the Express web server
app.listen(2319, function () {
    console.log('Our app is listening on port 2319!');
});