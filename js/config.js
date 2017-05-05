angular.module('mainApp')
    .config(function ($routeProvider) {
      $routeProvider
            .when('/', {
              templateUrl: 'templates/landing-page.html',
              controller: 'newMovieController'
            })
            .when('/search/:querySearch', {
              templateUrl: 'templates/results.html',
              controller: 'resultsController'
            })
            .when('/details/:id', {
              templateUrl: 'templates/details.html',
              controller: 'detailsController'
            })
            .when('/details-tv/:id', {
              templateUrl: 'templates/details-tv.html',
              controller: 'detailsTvController'
            })
    })
