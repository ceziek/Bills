'use strict';

angular.module('myApp.billElem', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/:billId', {
            templateUrl: 'view/bill_elements.html',
            controller: 'billElemCtrl'
        });
}])

.controller('billElemCtrl', ['$scope', 'StorageService', '$routeParams', function($scope, StorageService, $routeParams) {

    $scope.bill = StorageService.getItem($routeParams.billId);

    var index = StorageService.getIndex($routeParams.billId);

    $scope.add = function(name, balance) {
        StorageService.addElem(index,{
            name: name,
            balance: balance
        });
    }

}]);