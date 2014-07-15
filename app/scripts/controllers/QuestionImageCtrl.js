'use strict';

angular.module('wisdimo.admin')
.controller('QuestionImageCtrl',
['$scope', '$location', '$fileUploader', 'DataSvc', 'QuestionsRepositorySvc', 'Settings', 'question',
function ($scope, $location, $fileUploader, Data, Questions, Settings, question) {

  $scope.updateImageSource = function (imageUri) {
    var random = (new Date()).toString();
    $scope.imageSource = $scope.question.imageUri + "?cb=" + random;
  }

  $scope.question = question;
  $scope.updateImageSource($scope.question.imageUri);

  // create a uploader with options
  var uploader = $scope.uploader = $fileUploader.create({
    scope: $scope,                          // to automatically update the html. Default: $rootScope
    url: Settings.apiUrl + '/questions/' + question.id + '/image'
  });

  uploader.bind('afteraddingall', function (event, items) {
      console.info('After adding all files', items);
  });

  uploader.bind('success', function (event, xhr, item, response) {
      console.info('Success', xhr, item, response);
  });

  uploader.bind('cancel', function (event, xhr, item) {
      console.info('Cancel', xhr, item);
  });

  uploader.bind('error', function (event, xhr, item, response) {
      console.info('Error', xhr, item, response);
  });

  uploader.bind('complete', function (event, xhr, item, response) {
    $scope.updateImageSource($scope.question.imageUri);
  });

  uploader.bind('progressall', function (event, progress) {
      console.info('Total progress: ' + progress);
  });

  uploader.bind('completeall', function (event, items) {
      console.info('Complete all', items);
  });

  $scope.upload = function (question, form) {
    if(form.$valid) {
      uploader.uploadAll();
    }
  };

}]);