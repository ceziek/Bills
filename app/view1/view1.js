'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

    if ( localStorage.billsLocal === undefined ) {
        $http.get('data/bills.json').success(function (data) {
            var billsLocal = "";
            localStorage.setItem('billsLocal' ,angular.toJson(data));
            $scope.bills = JSON.parse(localStorage.billsLocal);
            console.log(localStorage.billsLocal);
        });
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