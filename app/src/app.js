'use strict';

var app = angular.module('Music', ['ui.router','ui.bootstrap']);

app.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('upcoming');

   $stateProvider
     .state('upcoming', {
        url: '/upcoming',
        templateUrl: 'app/src/upcomingAlbums/UpcomingAlbums.html'
    });
}]);
