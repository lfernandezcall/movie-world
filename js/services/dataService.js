angular.module('mainApp')
    .factory('dataService', function ($http) {
      function getMoviesArray (_movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _movieName
        return $http.get(url)
      }

      function getTVArray (_tvName) {
        var url = 'http://api.themoviedb.org/3/search/tv?api_key=d6ceefa77210945fb936085a6798e7a6&query=' + _tvName
        return $http.get(url)
      }

      // function getGenreIdMovie () {
      //   return $http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US')
      // }

      // function getGenreIdTv () {
      //   return $http.get('https://api.themoviedb.org/3/genre/tv/list?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US')
      // }

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
        // getGenreIdMovie: getGenreIdMovie,
        // getGenreIdTv: getGenreIdTv,
        getNewMovies: getNewMovies,
        getMovieById: getMovieById,
        getTvById: getTvById
      }
    })
