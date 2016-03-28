'use strict';

angular.module('myApp.Bills', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Bills', {
            templateUrl: 'view/bills.html',
            controller: 'BillsCtrl'
        });
    }])

    .controller('BillsCtrl', ['$scope', 'BillsService', '$location', function ($scope, BillsService, $location) {

        $scope.bills = BillsService.get();

        $scope.add = function (name, balance) {
            BillsService.add({
                name: name,
                balance: balance || 0
            });
        };

        $scope.delete = function (object) {
            BillsService.delete(object);
        };

        $scope.redirect = function (url) {
            $location.url('/' + url);
        };

    }]);