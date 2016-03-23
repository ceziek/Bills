'use strict';

angular.module('myApp.billElem', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/:bill', {
            templateUrl: 'view/bill_elements.html',
            controller: 'billElemCtrl'
        });
}])

.controller('billElemCtrl', ['$scope', 'StorageService', '$routeParams', function($scope, StorageService, $routeParams) {

    $scope.bills = StorageService;
    $scope.bill = StorageService.getItem($routeParams.bill);
    $scope.index = StorageService.getIndex($routeParams.bill);

    $scope.add = function(name, balance) {
        console.info (arguments);

        $scope.bills.addElem($scope.index, {
            name: name,
            balance: balance
        });
    }

}]);