angular.module('mainApp')
    .controller('movieController', function($scope, $rootScope, dataService) {
     	    $rootScope.clickedMovie = function(index) {
            $rootScope.movieTitle = $rootScope.movies[index].title
            $rootScope.releaseDate = $rootScope.movies[index].release_date
            $rootScope.backdropPath = $rootScope.movies[index].backdrop_path
            $rootScope.overview = $rootScope.movies[index].overview
            $rootScope.popularity = $rootScope.movies[index].popularity
        }
        	$rootScope.clickedSerie = function(index) {
            $scope.movieTitle = $rootScope.tvs[index].title
            $rootScope.releaseDate = $rootScope.tvs[index].release_date
            $rootScope.backdropPath = $rootScope.tvs[index].backdrop_path
            $rootScope.overview = $rootScope.tvs[index].overview
            $rootScope.popularity = $rootScope.tvs[index].popularity
        }
    })
