var appControllers = angular.module('appControllers',['appServices']);

appControllers.controller('controllerProduct', ['$scope', '$location', 'Product', function($scope, $location, Product){

  //console.log('herer');
  $scope.product = Product.getCollection();

  $scope.delete = function(_id) {
    Product.removeItem({id:_id}).$promise.then(

        function( value ){//success
          $location.path('/');
        },

        function( error ) {//error
          console.log(error);
        }

      );
  };

}]);



appControllers.controller('controllerDetails', ['$scope', '$routeParams', '$location', 'Product', function($scope, $routeParams, $location, Product){
  $scope.product = Product.get({id:$routeParams.id});
  
  $scope.cancel = function() {
    $location.path('/');
  }

  $scope.submitForm = function(isValid) {
    console.log('submited the form.');
      $scope.submitted = true;

      if(isValid) {
          $scope.product.comments.push($scope.comment);
		  //console.log($scope.product);return false;
          Product.updateItem({id:$scope.product.id.toString()}, $scope.product).$promise.then(

          function( value ){//success
            $location.path('/product');
          },

          function( error ) {//error
            console.log(error);
          }

      );
    } else {
      console.log('adding: form is not valid.');
    }
  };
  
}]);

appControllers.controller('controllerEditProduct', ['$scope', '$routeParams', '$location', 'Product', function($scope, $routeParams, $location, Product){
  $scope.product = Product.get({id:$routeParams.id});

  $scope.cancel = function() {
    $location.path('/');
  }

  $scope.submitForm = function(isValid) {
    $scope.submitted = true;
    if(isValid){

      Product.updateItem({id:$scope.product.id.toString()}, $scope.product).$promise.then(

          function( value ){//success
            $location.path('/');
          },

          function( error ) {//error
            console.log(error);
          }

      );

    } else {
      console.log('editing: form is not valid.');
    }

  };
}]);


appControllers.controller('controllerAddProduct', ['$scope', '$location', 'Product',  function($scope, $location, Product){

  $scope.cancel = function() {
    $location.path('/');
  }

  $scope.submitForm = function(isValid) {
    console.log('submited the form.');
      $scope.submitted = true;

      if(isValid) {

        Product.addItem($scope.product).$promise.then(

          function( value ){//success
            $location.path('/product');
          },

          function( error ) {//error
            console.log(error);
          }

      );
    } else {
      console.log('adding: form is not valid.');
    }
  };

}]);
