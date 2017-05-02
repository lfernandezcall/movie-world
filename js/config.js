angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/search', {
        templateUrl: '/templates/search.html',
        controller: 'movieSearchController'
      })
  })