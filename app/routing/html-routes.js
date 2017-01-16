//DEPENDENCIES
var path = require('path');
var express = require('express');
var morgan = require ('morgan');
var app = express();

//ROUTING

module.exports = function(app) {

    //HOME PAGE
    app.get('/', function(req, res) {
        res.sendFile(path.resolve('../public/home.html'));
    });

    //SURVEY PAGE
    app.get('survey', function(req, res) {
        res.sendFile(path.resolve( '../public/survey.html'));
    });

    app.use(function(req, res) {
        res.sendFile(path.resolve('../public/home.html'));
    });
};