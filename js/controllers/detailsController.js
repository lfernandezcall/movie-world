angular.module('mainApp')
    .controller('detailsController', function($scope, $routeParams, dataService) {
        var idMovie = $routeParams.id

        dataService.getMovieById(idMovie)
            .then(function(response) {
                var detailsMovie = response.data               
                $scope.imageMovie = detailsMovie.backdrop_path
                $scope.movie = detailsMovie
                console.log($scope.movie)
            })
    })
