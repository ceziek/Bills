'use strict';

angular.module('myApp.billElem', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/BillElements', {
    templateUrl: 'view/bill_elements.html',
    controller: 'billElemCtrl'
  });
}])

.controller('billElemCtrl', [function() {

}]);