'use strict';

angular.module('app.bills', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/bills.html',
            controller: 'billsCtrl'
        });
    }])

    .controller('billsCtrl', ['$scope', 'BillsService', function($scope, BillsService) {

        $scope.bills = BillsService.getBills();

        BillsService
            .getBills()
            .then(function (v) {
                //success
                console.info (v);
            }, function (e) {
                console.warn(e);
            });

        $scope.add = function (name, balance) {
            BillsService.addItem({
                name: name,
                balance: balance
            });
        }

    }]);