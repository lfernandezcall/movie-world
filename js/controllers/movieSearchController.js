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
    .factory('movieDataService', function($http) {

        function getMoviesArray(_movieName) {
            var url = 'http://api.themoviedb.org/3/search/movie?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _movieName
            return $http.get(url)
        }

        return {
            getMoviesArray: getMoviesArray

        }

    })
