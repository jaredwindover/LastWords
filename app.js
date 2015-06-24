var express  = require('express');
var mongoose = require('mongoose');
var app      = require('./index');

var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB);

app.listen(port);

console.log('App running on port ' + port);
