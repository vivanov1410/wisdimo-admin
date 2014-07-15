'use strict';

angular.module('wisdimo.admin')
.controller('QuestionCtrl',
['$scope', '$window', 'question',
function ($scope, $window, question) {

  $scope.title = 'Edit Question | Wisdimo.Admin';
  $window.document.title = $scope.title;
  
  $scope.question = question;

}]);