'use strict';

angular.module('myApp.bills', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Bills', {
    templateUrl: 'view/bills.html',
    controller: 'billsCtrl'
  });
}])

.controller('billsCtrl', ['$scope', 'StorageService', function($scope, StorageService) {

    $scope.bills = StorageService.get();

    $scope.add = function(name,balance){
        var id = Math.round(new Date()/1000);
        StorageService.add({
            id: id,
            name: name,
            balance: balance,
            elements: []
        });

    };

    $scope.print = function() {
        StorageService.print();
    };

    $scope.reset = function() {
        StorageService.reset();
    };

}]);