angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: '/templates/search.html',
        controller: 'movieSearchController'
      })
  })