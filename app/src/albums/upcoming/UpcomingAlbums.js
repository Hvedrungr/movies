angular.module('Music').directive('upcomingAlbums', [
  'DataService', '$state',
  function (dataService, $state) {
    return {
      templateUrl: 'app/src/albums/upcoming/UpcomingAlbums.html',
      restrict: 'E',
      link: function (scope) {
          dataService.get('albums/upcoming').then(function(data) {
            scope.upcomingAlbums = data.upcoming_albums;
          });
      }
    };
  }]
);
