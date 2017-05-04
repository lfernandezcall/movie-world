angular.module('mainApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/landing-page.html',
                controller: 'newMovieController'
            })
            .when('/search', {
                templateUrl: '/templates/home.html',
                controller: 'homeController'
            })
            .when('/movie', {
                templateUrl: '/templates/movie.html',
                controller: 'movieController'
            })
    })
