angular.module('mainApp')
    .factory('dataService', function ($http) {
      function getMoviesArray (_movieName) {
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _movieName
        return $http.get(url)
      }

      function getTVArray (_tvName) {
        var url = 'https://api.themoviedb.org/3/search/tv?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _tvName
        return $http.get(url)
      }

      function getNewMovies () {
        return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US&page=1')
                .then(function (response) {
                  return response.data.results
                })
      }

      function getMovieById (idMovie) {
        var url = 'https://api.themoviedb.org/3/movie/' + idMovie + '?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US'
        return $http.get(url)
      }

      function getTvById (idTv) {
        var url = 'https://api.themoviedb.org/3/tv/' + idTv + '?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US'
        return $http.get(url)
      }

      return {
        getMoviesArray: getMoviesArray,
        getTVArray: getTVArray,
        getNewMovies: getNewMovies,
        getMovieById: getMovieById,
        getTvById: getTvById
      }
    })
