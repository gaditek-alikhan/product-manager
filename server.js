/* jslint node: true */
'use strict';
var logger = require("./utilities/logger");
var express = require('express');
var bodyParser = require('body-parser');
var path     = require('path');
var product  = require('./routes/product');
var app  = express();
var portNumber = process.env.PORT || 9000;
var baseURL = '/';

logger.debug("Overriding 'Express' logger");
app.use(require('morgan')({ "stream": logger.stream }));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());


//server.use(express.json());
//server.use(express.urlencoded());
//server.use(express.static(__dirname + '/app'));

app.get(baseURL    + 'product',     product.findAll);
app.get(baseURL    + 'product/:id', product.findById);
app.post(baseURL   + 'product',     product.addProduct);
app.put(baseURL    + 'product/:id', product.updateProduct);
app.delete(baseURL + 'product/:id', product.deleteProduct);

app.listen(portNumber);//get the server app running...
console.log('\nNode server listening on port ' + portNumber);

//basic error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, '500 - Internal server error');
});