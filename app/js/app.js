var app = angular.module('productApp',['ngRoute','ngAnimate','appControllers']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/product', {
        templateUrl: 'views/list.html',
        controller: 'controllerProduct'
      }).
      when('/product/:id', {
        templateUrl: 'views/details.html',
        controller: 'controllerDetails'
      }).
      when('/new', {
        templateUrl: 'views/addProduct.html',
        controller: 'controllerAddProduct'
      }).
      when('/product-edit/:id', {
        templateUrl: 'views/editProduct.html',
        controller: 'controllerEditProduct'
      }).
      otherwise({
        redirectTo: '/product'
      });
  }]);
