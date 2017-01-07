angular.module('Music').directive('bandDetails', [
  'DataService', '$state',
  function (dataService, $state) {
    return {
      templateUrl: 'app/src/bands/details/BandDetails.html',
      restrict: 'E',
      link: function (scope) {

        if($state.params.id) {
          dataService.get('band/', $state.params.id).then(function(data) {
            scope.band = data;
          });
        }

      }
    };
  }]
);
