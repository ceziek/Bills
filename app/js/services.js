'use strict';

angular.module('services', ['ngStorage'])

.service('StorageService', ['$localStorage', function($localStorage){

    if ($localStorage.bills === undefined) {
        $localStorage = $localStorage.$default({
            bills: []
        });
    }

    var _get = function() {
        return $localStorage.bills;
    };

    var _getItem = function(object) {
        for( var i=0; i<$localStorage.bills.length; i++) {
            if (angular.toJson($localStorage.bills[i]) == object){

                return $localStorage.bills[i];
            }
        }
        return console.log("Object not found in Storage");
    };

    var _getIndex = function(object) {
        for( var i=0; i<$localStorage.bills.length; i++) {
            if (angular.toJson($localStorage.bills[i]) == object){

                return i;
            }
        }
        return console.log("Index not found in Storage");
    };

    var _add = function(item) {
        $localStorage.bills.push(item);
    };

    var _addElem = function(index, elem) {
        $localStorage.bills[index].elements.push(elem);
    };

    var _print = function() {
        console.log(angular.toJson($localStorage.bills));
    };

    var _reset = function() {
        $localStorage.bills = [];
    };

    return {
        get: _get,
        getItem: _getItem,
        getIndex: _getIndex,
        add: _add,
        addElem: _addElem,
        print: _print,
        reset: _reset
    }

}]);
