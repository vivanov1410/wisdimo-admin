'use strict';

angular.module('wisdimo.admin')
.factory('AccountsRepositorySvc',
['Restangular',
function (Restangular) {

  var Repository = {};
  var route = 'accounts';

  Restangular.extendModel(route, function (model) {
    return model;
  });

  Repository.all = function () {
    return Restangular.all(route).getList();
  };

  Repository.find = function (id) {
    return Restangular.one(route, id).get();
  };

  return Repository;

}]);