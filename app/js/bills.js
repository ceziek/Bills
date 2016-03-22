'use strict';

angular.module('myApp.bills', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Bills', {
    templateUrl: 'view/bills.html',
    controller: 'billsCtrl'
  });
}])

.controller('billsCtrl', ['$scope', 'StorageService', function($scope, StorageService) {

    var refresh = function(){
        $scope.bills = StorageService.get();
    };

    $scope.StorageService = StorageService;
    refresh();


    $scope.add = function(name,balance){
        $scope.StorageService.add({
            name: name,
            balance: balance,
            elements: []
        });
        refresh();
    };

    $scope.print = function() {
        $scope.StorageService.print();
    };

    $scope.reset = function() {
        $scope.StorageService.reset();
        refresh();
    };

}]);