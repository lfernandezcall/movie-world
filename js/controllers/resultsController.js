angular.module('mainApp')
    .controller('resultsController', function ($scope, $routeParams, $rootScope, dataService) {
      var querySearch = $routeParams.querySearch

      dataService.getMoviesArray(querySearch)
            .then(function (response) {
              var movieObjectArray = response.data.results
                    // var newMovieObjectArray = []
              console.log(movieObjectArray)
              $scope.movies = movieObjectArray.filter(function (movie) {
                return movie.poster_path !== null
              })
            })

      dataService.getTVArray(querySearch)
            .then(function (response) {
              var tvObjectArray = response.data.results
                    // var newTvObjectArray = []
              console.log(tvObjectArray)
              $scope.tvs = tvObjectArray.filter(function (tv) {
                return tv.poster_path !== null
              })
            })
    })
