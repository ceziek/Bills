'use strict';

var Point = function (x, y) {


    this.init = function () {

        this.x = x || 0;
        this.y = y || 0;

        return this;
    };

    return this.init();
};

angular.module('app.services', [])
.service('BillsService', ['$q', function($q) {

    var bills = JSON.parse(window.localStorage.getItem('bills')) || [];

    this.getBills = function () {
        var p = $q.defer();

        var x = Math.floor(Math.random()*2) > 0;

        setTimeout(function () {
            if (x) {
                p.resolve('ok');
            }

            p.reject('dupa');
        }, 800);


        return p.promise;
    };

    this.addItem = function (item) {
        bills.push(item);
        this.sync();
    };

    this.sync = function() {
        window.localStorage.setItem('bills', angular.toJson(bills));
    }

}]);
