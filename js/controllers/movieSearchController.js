angular.module('mainApp')
    .controller('movieSearchController', function($scope, movieDataService) {

        $scope.getMovieData = function() {

            var _movieName = $scope.movieName


            movieDataService.getMoviesArray(_movieName)
                .then(function(response) {
                    var movieObjectArray = response.data.results
                    movieObjectArray.forEach(function(movie, key) {
                        if (movie.poster_path === null) {
                            movieObjectArray.splice(key, 1)
                        }
                    })

                    console.log(movieObjectArray)
                    $scope.movies = movieObjectArray

                })

        }

    })
  
