'use strict';

angular.module('myApp.BillsService', [])

    .service('BillsService', ['$localStorage', function ($localStorage) {

        $localStorage.bills = $localStorage.bills || $localStorage.$default({bills: []});

        this.get = function () {
            return $localStorage.bills;
        };

        this.add = function (item) {
            // lepiej uzyc
            item.id = (new Date()).getTime();

            // item.id = Math.round(new Date() / 1000);

            item.items = [];
            $localStorage.bills.push(item);
        };

        this.delete = function (object) {
            // to jest dosc niebezpieczne
            // prosty przyklad
            /*

            let arr = ['a','b','c'];

            chcemy id elementu 'b' ... wiec indexOf('b') da nam 1

            ale

            let arr = ['a','a','a','b','c','c','a'];

            indexOf('a') === 0
            indexOf('c') === 4

            czyli zawsze id pierwszego elementu

             */


            $localStorage.bills.splice($localStorage.bills.indexOf(object), 1);
        };

    }]);
