// When you use the command require() in Node, it scans
// the node_modules folder for a package with the appropriate name,
// and pulls that as a dependency into your file.
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(3000, function () {
  console.log('Our app is listening on port 3000!');
});
