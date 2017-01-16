var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

//Setting the express app

    var app = express();
    var port = process.env.PORT || 8080;

//Express app to handle parsing

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routes

    require('./app/routing/html-routes.js')(app);
    require('./app/routing/api-routes.js')(app);

//Start server to listen

app.listen(port, function(){
    console.log('app listening on PORT ' + port);
});