'use strict';

angular.module('myApp.BillService', [])

    .service('BillService', ['BillsService', '$filter', function (BillsService, $filter) {

        var storage = BillsService.get();

        var index = function (id) {
            var obj = $filter('filter')(storage, id)[0];
            return storage.indexOf(obj);
        };


        this.get = function (id) {
            return storage[index(id)];
        };

        this.add = function (object, item) {
            object.items.push(item);
        };

        this.delete = function (object, item) {
            object.items.splice(object.items.indexOf(item), 1)
        };

    }]);
