'use strict';

angular.module('myApp.controllers', [])
// MAIN CTRL
.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
    function ($scope, $rootScope, $window, $location) {
    // init transition object class
    $scope.slide = '';

    /**
     * Send the user back usign $window.history and css3 transitions
     *
     * @see $window
     */
    $rootScope.back = function () {
      $scope.slide = 'slide-right';
      $window.history.back();
    }

    /**
     * Go to designed location path
     *
     * @param  {string} path
     */
    $rootScope.go = function (path) {
      $scope.slide = 'slide-left';
      $location.url(path);
    }

}])
// EMPLOYEE LIST CTRL
.controller('EmployeeListCtrl', ['$scope', '$routeParams', 'Employee',
    function ($scope, $routeParams, Employee) {
    $scope.query = '';
    // query employees
    var employees = Employee.query();
    for (var i = employees.length - 1; i >= 0; i--) {
      employees[i].fullName = employees[i].firstName + ' ' + employees[i].lastName;
    }

    $scope.employees = employees;
    window.$scope = $scope;
}])

// EMPLOYEE DETAIL CTRL
.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee',
    function ($scope, $routeParams, Employee) {
    // get employee by id
    $scope.employee = Employee.get({
      employeeId: $routeParams.employeeId
    });
}]);
