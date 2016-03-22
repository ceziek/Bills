'use strict';

angular.module('myApp.bills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Bills', {
    templateUrl: 'view/bills.html',
    controller: 'billsCtrl'
  });
}])

.controller('billsCtrl', ['$scope', function($scope) {

    // Kontroller nie sluzy do zarzadzania danymi, od tego sa serwisy.

    if ( localStorage.billsLocal === undefined ) {
        // BEZSENS
        localStorage.setItem('billsLocal', '[]');
        // ustawiasz billsLocal na pusta tablice w localStorage
        $scope.bills = JSON.parse(localStorage.billsLocal)    // <- tu brakuje srednika
        // i zaraz potem czytasz to localStorage i je parsujesz BEEEEEEEZSENS
    } else $scope.bills = JSON.parse(localStorage.billsLocal);

    // Brak { }

    $scope.add = function(name,balance){ // spacja po przecinku, spacja po )
        var item = {
            name: name,
            balance: balance
        };
        // zmienna zupelnie nie potrzebna, mogles inlinowo wpisac ten obiekt
        // $scope.bills.push({
        //      name: name,
        //      balance: balance
        //    });
        
        $scope.bills.push(item);

        localStorage.billsLocal = angular.toJson($scope.bills); // duplikacja, powinienes wyrzucic to do wspolnej funkcji prywatnej
    };

    $scope.print = function() {
        console.log(angular.toJson($scope.bills));
    };

    $scope.reset = function() {
        $scope.bills = [];
        localStorage.billsLocal = angular.toJson($scope.bills); // duplikacja
    };

}]);