angular.module('mainApp')
    .controller('detailsController', function($scope, $routeParams, dataService) {
        var idMovie = $routeParams.id

        dataService.getMovieById(idMovie)
            .then(function(response) {
                var detailsMovie = response.data               
                if (detailsMovie.backdrop_path === null) {
                    $scope.imageMovie = detailsMovie.poster_path
                } else { $scope.imageMovie = detailsMovie.backdrop_path }
                $scope.movie = detailsMovie
                console.log($scope.movie)
            })
    })
