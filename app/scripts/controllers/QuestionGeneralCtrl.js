'use strict';

angular.module('wisdimo.admin')
.controller('QuestionGeneralCtrl',
['$scope', '$location', 'DataSvc', 'QuestionsRepositorySvc', 'question',
function ($scope, $location, Data, Questions, question) {

  $scope.difficulties = Data.difficulaties;
  $scope.loading = false;

  $scope.question = question;

}]);