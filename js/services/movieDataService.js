angular.module('mainApp')
    .factory('movieDataService', function($http) {

        function getMoviesArray(_movieName) {
            var url = 'http://api.themoviedb.org/3/search/movie?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _movieName
            return $http.get(url)
        }

        return {
        	
            getMoviesArray: getMoviesArray

        }

    })