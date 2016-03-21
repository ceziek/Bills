'use strict';

angular.module('myApp.bills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Bills', {
    templateUrl: 'view/bills.html',
    controller: 'billsCtrl'
  });
}])

.controller('billsCtrl', ['$scope', function($scope) {

    if ( localStorage.billsLocal === undefined ) {
        localStorage.setItem('billsLocal', '[]');
        $scope.bills = JSON.parse(localStorage.billsLocal)
    } else $scope.bills = JSON.parse(localStorage.billsLocal);

    $scope.add = function(name,balance){
        var item = {
            name: name,
            balance: balance
        };
        $scope.bills.push(item);
        localStorage.billsLocal = angular.toJson($scope.bills);
    };

    $scope.print = function() {
        console.log(angular.toJson($scope.bills));
    };

    $scope.reset = function() {
        $scope.bills = [];
        localStorage.billsLocal = angular.toJson($scope.bills);
    };

}]);