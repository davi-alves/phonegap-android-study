'use strict';

angular.module('myApp.restServices', ['ngResource'])
// EMPLOYEE RESOURCE
.factory('Employee', ['$resource',
  function($resource) {
		return $resource('http://localhost:3000/employees/:emplyeeId', {});
  }
]);;