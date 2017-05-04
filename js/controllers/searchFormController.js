angular.module('mainApp')
    .controller('searchFormController', function ($scope, $location, $rootScope, dataService) {
  
      $scope.getData = function () {
        var query = $scope.userSearch
        $location.path('/search/' + query)
      }
    })

    // URL'S
    // ______________________________________________________
    // SEARCH BY GENRE: https://api.themoviedb.org/3/discover/movie?api_key=d6ceefa77210945fb936085a6798e7a6&with_genres=16,28
    // SEARCH BY GENRE #2: https://api.themoviedb.org/3/genre/28/movies?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US&include_adult=false&sort_by=created_at.asc
    // SEARCH ACTOR/CAST BY NAME: https://api.themoviedb.org/3/search/person?api_key=d6ceefa77210945fb936085a6798e7a6&query=woody+allen
    // SEARCH WORKS BY ID NAME: https://api.themoviedb.org/3/person/1243/combined_credits?api_key=d6ceefa77210945fb936085a6798e7a6
