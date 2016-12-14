angular.module('Music').directive('albumDetails', [
  'DataService', '$state',
  function (dataService, $state) {
    return {
      templateUrl: 'app/src/albums/details/AlbumDetails.html',
      restrict: 'E',
      link: function (scope) {

        if($state.params.id) {
          dataService.get('album/', $state.params.id).then(function(data) {
            scope.album = data.album;
            scope.band = data.band;
          });
        }

      }
    };
  }]
);
