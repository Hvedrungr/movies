angular.module('Music').factory('DataService', [
  '$http',
  function ($http) {
    var BASE_URL = 'http://em.wemakesites.net/';

    return {
      get: function get(url, resourceId) {
        return $http({
          url: resourceId ? BASE_URL + url + resourceId : BASE_URL + url,
          method: 'jsonp',
          params: {
            api_key: config.API_KEY,
            callback: 'JSON_CALLBACK'
          }}).then(function(response) {
            return response.data.data;
          }
        );
      }
    };
  }]
);
