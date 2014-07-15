'use strict';

angular.module('wisdimo.admin')
.controller('QuestionsCtrl',
['$scope', '$window', 'QuestionsRepositorySvc',
function ($scope, $window, Questions) {

  $scope.title = 'Questions | Wisdimo.Admin';
  $window.document.title = $scope.title;

  Questions.all().then(
  function (questions) {
    $scope.questions = questions;    
  });

}]);