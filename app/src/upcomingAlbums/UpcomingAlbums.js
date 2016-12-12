angular.module('Music').directive('upcomingAlbums', [
  'DataService',
  function (dataService) {
    return {
      templateUrl: 'app/src/upcomingAlbums/UpcomingAlbums.html',
      restrict: 'E',
      link: function (scope) {
          dataService.get('albums/upcoming').then(function(data) {
            scope.upcomingAlbums = data.upcoming_albums;
          })
      }
    };
  }]
);
