'use strict';

var app = angular.module('Music', ['ui.router','ui.bootstrap']);

app.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('upcoming');

   $stateProvider
      .state('upcoming', {
        url: '/upcoming',
        template: '<upcoming-albums></upcoming-albums>'
      })
      .state('album-detail', {
        url: '/album/:id',
        template: '<album-details></album-details>'
      })
      .state('band-detail', {
        url: '/band/:id?:randomize',
        template: '<band-details></band-details>'
      });
}]);
