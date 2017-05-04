angular.module('mainApp')
    .controller('newMovieController', function($scope, $rootScope, dataService) {
        
        dataService.getNewMovies()
            .then(function(response) {
                $rootScope.movies = response
            })
    })
