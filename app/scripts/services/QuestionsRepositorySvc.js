'use strict';

angular.module('wisdimo.admin')
.factory('QuestionsRepositorySvc',
['Restangular',
function (Restangular) {

  var Repository = {};
  var route = 'questions';

  Restangular.extendModel(route, function (model) {
    return model;
  });

  Repository.all = function () {
    return Restangular.all(route).getList();
  };

  Repository.find = function (id) {
    return Restangular.one(route, id).get();
  };

  Repository.create = function (question) {
    return Restangular.all(route).post(question);
  };

  return Repository;

}]);