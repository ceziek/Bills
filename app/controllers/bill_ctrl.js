'use strict';

angular.module('myApp.Bill', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:billId', {
            templateUrl: 'view/bill.html',
            controller: 'BillCtrl'
        });
    }])

    .controller('BillCtrl', ['$scope', 'BillService', '$routeParams', function ($scope, BillService, $routeParams) {

        $scope.bill = BillService.get($routeParams.billId);

        $scope.add = function (name, balance) {
            BillService.add($scope.bill, {
                name: name,
                balance: balance
            });
        };

        $scope.delete = function (item) {
            BillService.delete($scope.bill, item);
        };

    }]);