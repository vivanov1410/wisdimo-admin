'use strict';

angular.module('wisdimo.admin')
.controller('MainCtrl',
['$scope', 'Settings',
function ($scope, Settings) {

  $scope.currentYear = Settings.currentYear;
  
}]);