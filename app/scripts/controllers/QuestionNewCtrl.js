'use strict';

angular.module('wisdimo.admin')
.controller('QuestionNewCtrl',
['$scope', '$window', '$location', 'DataSvc', 'QuestionsRepositorySvc',
function ($scope, $window, $location, Data, Questions) {

  $scope.title = 'Create New Question | Wisdimo.Admin';
  $window.document.title = $scope.title;

  $scope.difficulties = Data.difficulaties;
  $scope.loading = false;

  $scope.question = {
    difficulty: $scope.difficulties[0].key
  };

  $scope.create = function (question, form) {
    if(form.$valid) {
      $scope.loading = true;

      Questions.create(question).then(
      function (question) { 
        $scope.loading = false;
        $location.url('questions/' + question.id + '/general');
      },
      function (error) {
        $scope.loading = false;
        console.loading(error);
      });
    }
  };

}]);