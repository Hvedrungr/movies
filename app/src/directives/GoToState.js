angular.module('Music').directive('goToState', [
  '$state',
  function ($state) {
    return{
      restrict: 'A',
      link: function (scope, element, attr) {
        element.on('click', function(){
          $state.go(attr.goToState, {id:attr.withId});
          scope.$apply();
        });
      }
    }
  }
]);
