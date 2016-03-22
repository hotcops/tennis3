'use strict';

var express = require('express');

var app = express();
var port = 3000;

app.listen(3000, function() {
  console.log("Intensity Server running on port " + port);
});

app.use('/', express.static('public'));
