angular.module('Music').directive('bandDetails', [
  'DataService', '$state',
  function (dataService, $state) {
    return {
      templateUrl: 'app/src/bands/details/BandDetails.html',
      restrict: 'E',
      link: function (scope) {

        var _getBand = function getBand(url, id) {
          dataService.get(url, id).then(function(data) {
            scope.band = data;
          });
        }

        if($state.params.id) {
          _getBand('band/', $state.params.id);
        } else if($state.params.randomize) {
          _getBand('band/random');
        }

      }
    };
  }]
);
