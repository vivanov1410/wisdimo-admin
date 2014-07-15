'use strict';

angular.module('wisdimo.admin', [
  'wisdimo.settings',
  'wisdimo.globals',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'restangular',
  'angularFileUpload'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'Settings', 'RestangularProvider',
function ($stateProvider, $urlRouterProvider, $httpProvider, Settings, RestangularProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    })

    .state('main.dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard',
      controller: 'DashboardCtrl'
    })
    .state('main.accounts', {
      url: '/accounts',
      templateUrl: 'partials/accounts',
      controller: 'AccountsCtrl'
    })
    .state('main.questions', {
      url: '/questions',
      templateUrl: 'partials/questions',
      controller: 'QuestionsCtrl'
    })
    .state('main.question-new', {
      url: '/questions/new',
      templateUrl: 'partials/question-new',
      controller: 'QuestionNewCtrl'
    })
    .state('main.question', {
        abstract: true,
        url: '/questions/:questionId',
        templateUrl: 'partials/question',
        controller: 'QuestionCtrl',
        resolve: {
          question: function ($stateParams, $q, QuestionsRepositorySvc) {
            var deferred = $q.defer();

            QuestionsRepositorySvc.find($stateParams.questionId).then(
              function (question) {
                deferred.resolve(question);
              },
              function (error) {
                console.log(error);
                deferred.reject(error);
              });

            return deferred.promise;
          }
        }
      })
      .state('main.question.general', {
        url: '/general',
        templateUrl: 'partials/question-general',
        controller: 'QuestionGeneralCtrl',
      })
      .state('main.question.image', {
        url: '/image',
        templateUrl: 'partials/question-image',
        controller: 'QuestionImageCtrl',
      });

  // enabling CORS
  $httpProvider.defaults.useXDomain = true;

  // setting up Restangular
  RestangularProvider.setBaseUrl( Settings.apiUrl );

  RestangularProvider.setResponseExtractor(function (response, operation) {
    var modifiedResponse = response;
    if( operation === 'getList' ) {
      if( response.data ) {
        modifiedResponse = response.data;
      }
    }

    return modifiedResponse;
  });

}]);