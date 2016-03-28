'use strict';

angular.module('myApp.BillsService', [])

    .service('BillsService', ['$localStorage', function ($localStorage) {

        $localStorage.bills = $localStorage.bills || $localStorage.$default({bills: []});

        this.get = function () {
            return $localStorage.bills;
        };

        this.add = function (item) {
            item.id = Math.round(new Date() / 1000);
            item.items = [];
            $localStorage.bills.push(item);
        };

        this.delete = function (object) {
            $localStorage.bills.splice($localStorage.bills.indexOf(object), 1);
        };

    }]);
