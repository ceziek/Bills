'use strict';

angular.module('services', ['ngStorage'])

.service('StorageService', ['$localStorage', function($localStorage){

    if ($localStorage.bills === undefined) {
        $localStorage = $localStorage.$default({
            bills: []
        });
    }

    this.get = function() {
        return $localStorage.bills;
    };

    this.getItem = function(id) {
        for( var i=0; i<$localStorage.bills.length; i++) {
            if ($localStorage.bills[i].id == id){

                return $localStorage.bills[i];
            }
        }
        return console.log("Object not found in Storage");
    };

    this.getIndex = function(id) {
        for( var i=0; i<$localStorage.bills.length; i++) {
            if ($localStorage.bills[i].id == id){

                return i;
            }
        }
        return console.log("Index not found in Storage");
    };

    this.add = function(item) {
        $localStorage.bills.push(item);
    };

    this.addElem = function(index, elem) {
        $localStorage.bills[index].elements.push(elem);
    };

    this.print = function() {
        console.log(angular.toJson($localStorage.bills));
    };

    this.reset = function() {
        $localStorage.bills.splice(0,$localStorage.bills.length);
    };

}]);
