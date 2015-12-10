/* jslint node: true */
'use strict';

/*
HTTP/1.1 RFC, for REST API reference
http://www.w3.org/Protocols/rfc2616/rfc2616.html
In this example case, each exports function, deals with a dummy object dataset.
*/



exports.findAll = function(req, res) {
  res.send(data);
};



exports.findById = function(req, res) {

  var product = data[req.params.id];

  res.send(
    {
      id: req.params.id,
      name: product.name,
      description: product.description,
      price: product.price,
      enabled: product.enabled,
       comments: product.comments
    }
  );

};



exports.addProduct = function(req, res) {

  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('price')){
    res.statusCode = 400;
    return res.send('Error 400: Bad request, POST syntax incorrect.');
  }

  //TODO improve sanitization/validation
  var newProduct = {};
  newProduct.id = data.length;
  newProduct.name = req.body.name;
  newProduct.description = req.body.description;
  newProduct.price = req.body.price;
  newProduct.enabled = req.body.enabled;
  newProduct.comments = [];

  console.log('Added a product.');
  data.push(newProduct);
  res.statusCode = 201;
  res.send('');

};



exports.updateProduct = function(req, res) {

  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('price')){
    res.statusCode = 400;
    return res.send('Error 400: Bad request, PUT syntax incorrect.');
  }

  var found = false;
  var id = req.params.id;
  for (var i = data.length - 1; i >= 0; i--) {
    if(data[i].id == id) {
      found = true;
      break;
    }
  }

  //console.log(req.body);
  if(found) {
    console.log('Updating product: ' + id);
    data[i].name = req.body.name;
    data[i].description = req.body.description;
    data[i].price = req.body.price;
    data[i].enabled = req.body.enabled;
	if(req.body.comments){
		data[i].comments = req.body.comments;
	}
    res.statusCode = 200;
    return res.send('');
  }

  res.statusCode = 410;
  return res.send('Error 410: resource no longer available.');

};



exports.deleteProduct = function(req, res) {

  var id = req.params.id;

  for (var i = data.length - 1; i >= 0; i--) {

    if(data[i].id.toString() == id){
      data.splice(i,1);
      console.log('Product deleted.');
      res.statusCode = 200;
      return res.send(true);
    }

  }

  res.statusCode = 404;
  return res.send(false);

};



//dummy products data
var data = [
      {
        "id": 0,
        "name": "product 1",
        "description": "product 1 description",
        "price": "33",
        "enabled": true,
		"comments":['very nice product','best product ever seen','great product in the world']
      },
      {
        "id": 1,
        "name": "product 2",
        "description": "product 2 description",
        "price": "55",
        "enabled": true,
		"comments":['very nice product','best product ever seen','great product in the world']
      },
      {
        "id": 2,
        "name": "product 3",
        "description": "product 3 description",
        "price": "88",
        "enabled": false,
		"comments":['very nice product','best product ever seen','great product in the world']
      },
      {
        "id": 3,
        "name": "product 4",
        "description": "product 4 description",
        "price": "10",
        "enabled": true,
		"comments":['very nice product','best product ever seen','great product in the world']
      },
      {
        "id": 4,
        "name": "product 5",
        "description": "product 5 description",
        "price": "77",
        "enabled": false,
		"comments":['very nice product','best product ever seen','great product in the world']
      },
      {
        "id": 5,
        "name": "product 6",
        "description": "product 6 description",
        "price": "110",
        "enabled": false,
		"comments":['very nice product','best product ever seen','great product in the world']
      }
    ];
