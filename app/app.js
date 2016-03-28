'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'ngStorage',
        'ngMaterial',
        'myApp.Bills',
        'myApp.Bill',
        'myApp.BillService',
        'myApp.BillsService'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/Bills'});
    }]);
