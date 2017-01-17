angular.module('Music').directive('header', [
  function () {
    return {
      templateUrl: 'app/src/header/header.html',
      restrict: 'E',
      link: function ($scope, element) {

        var myElement = element[0].getElementsByTagName('nav')[0];

        $scope.openNav = function openNav() {
          myElement.style.width = '25%';
          myElement.style.display = "block";
        };

        $scope.closeNav = function closeNav() {
          myElement.style.display = "none";
        };
      }
    };
  }]
);
