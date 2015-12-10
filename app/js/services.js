var services = angular.module('appServices', ['ngResource']);

services.factory('Product', ['$resource',
  function($resource){
    return $resource('/product/:id', {}, {
      getCollection: {method:'GET', params: {}, isArray: true},
      getItem: {method:'GET', isArray: false},
      addItem: {method:'POST'},
      updateItem: {method:'PUT', params: {id:'@id'}, isArray: false},
      removeItem: {method:'DELETE', params: {id:'@id'}}
    });
}]);