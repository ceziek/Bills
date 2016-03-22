'use strict';

angular.module('BillsApp.bills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bills', {
    templateUrl: 'bills/bills.html',
    controller: 'BillsCtrl'
  });
}])

.controller('BillsCtrl', ['$scope', function($scope) {

    if ( localStorage.bills === undefined ) {
        localStorage.setItem('bills', "[]");
        $scope.bills = JSON.parse(localStorage.bills);
        console.log(localStorage.bills);
    } else {
        $scope.bills = JSON.parse(localStorage.bills);
    }

    $scope.add = function(name,balance){
        var item = {
            name: name,
            balance: balance
        };
        $scope.bills.push(item);
        localStorage.bills = angular.toJson($scope.bills);
    };

    $scope.print = function() {
        console.log(angular.toJson($scope.bills));
    };

    $scope.reset = function() {
        $scope.bills = [];
        localStorage.bills = angular.toJson($scope.bills);
    };





}]);