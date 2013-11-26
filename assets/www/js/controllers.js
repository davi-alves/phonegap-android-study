'use strict';

angular.module('myApp.controllers', [])
// MAIN CTRL
.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
    function($scope, $rootScope, $window, $location) {
    // init
    var back, go, exitApp, exitInterval;

    /**
     * Send the user back usign $window.history and css3 transitions
     *
     * @see $window
     */
    back = function() {
      $scope.slide = 'slide-right';
      $window.history.back();
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    };

    /**
     * Go to designed location path
     *
     * @param  {string} path
     */
    go = function(path) {
      $scope.slide = 'slide-left';
      $location.url(path);
    };

    exitApp = function() {
      if (exitInterval) {
        return navigator.app.exitApp();
      }

      exitInterval = setTimeout(function() {
        clearTimeout(exitInterval);
        exitInterval = null;
      }, 4000);

    }

    // mobile back button event
    $window.document.addEventListener("backbutton", function() {
      var controller = document.querySelector('[ng-controller=MainCtrl]');
      if (controller) {
        angular.element(controller).scope().back();
      }
    }, true);

    // init scope variables
    $scope.slide = '';
    $rootScope.back = back;
    $rootScope.go = go;

}])
// EMPLOYEE LIST CTRL
.controller('EmployeeListCtrl', ['$scope', 'Employee',
    function($scope, Employee) {
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
    function($scope, $routeParams, Employee) {
    // get employee by id
    $scope.employee = Employee.get({
      employeeId: $routeParams.employeeId
    });
}]);