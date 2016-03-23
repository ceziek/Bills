'use strict';

angular.module('app', [
    'ngRoute',
    'app.services',
    'app.bills'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
