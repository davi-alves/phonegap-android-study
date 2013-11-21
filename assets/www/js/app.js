'use strict';

angular.module('myApp', [

  'ngTouch',
  'ngRoute',
  'ngAnimate',
  'myApp.controllers',
  'myApp.restServices'

])
  .config(['$routeProvider',
    function ($routeProvider) {
      // employee listing
      $routeProvider.when('/employees', {
        templateUrl: 'partials/employee-list.html',
        controller: 'EmployeeListCtrl'
      });

      $routeProvider.otherwise({
        redirectTo: '/employees'
      });

}]);
