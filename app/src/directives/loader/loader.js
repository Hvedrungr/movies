angular.module('Music').directive('loader', [
  function () {
    return {
      templateUrl: 'app/src/directives/loader/loader.html',
      restrict: 'E',
      link: function ($scope, element) {
      }
    };
  }]
);
