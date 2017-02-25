'use strict';

angular.
module('myApp').
config(['$locationProvider' ,'$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/items', {
      template: '<item-list></item-list>'
    }).
    when('/items/:id', {
      template: '<item-detail></item-detail>'
    }).
    otherwise('/items');
  }
]);
