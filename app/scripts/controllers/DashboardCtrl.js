'use strict';

angular.module('wisdimo.admin')
.controller('DashboardCtrl',
['$scope', '$window',
function ($scope, $window) {

  $scope.title = 'Dashboard | Wisdimo';
  $window.document.title = $scope.title;

}]);