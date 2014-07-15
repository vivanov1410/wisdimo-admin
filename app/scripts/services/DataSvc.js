'use strict';

angular.module('wisdimo.admin')
.factory('DataSvc', [function () {

  var Data = {
    difficulaties: [
      { key: 'easy', value: 'Easy' },
      { key: 'medium', value: 'medium' },
      { key: 'hard', value: 'Hard' }
    ]
  };

  return Data;

}]);