'use strict';

angular.module('wisdimo.admin')
.controller('AccountsCtrl',
['$scope', '$window', 'AccountsRepositorySvc',
function ($scope, $window, Accounts) {

  $scope.title = 'Accounts | Wisdimo.Admin';
  $window.document.title = $scope.title;

  Accounts.all().then(
  function (accounts) {
    $scope.accounts = accounts;    
  });

}]);