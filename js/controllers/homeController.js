angular.module('mainApp')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getData = function() {
            

            var _movieName = $scope.userSearch

            dataService.getMoviesArray(_movieName)
                .then(function(response) {
                    var movieObjectArray = response.data.results
                    var newMovieObjectArray = []
                    console.log(movieObjectArray)
                    movieObjectArray.forEach(function(movie, key) {
                        if (movie.poster_path) {
                            newMovieObjectArray.push(movieObjectArray[key])
                        }
                    })
                    $rootScope.movies = newMovieObjectArray
                })

            var _tvName = $scope.userSearch

            dataService.getTVArray(_tvName)
                .then(function(response) {
                    var tvObjectArray = response.data.results
                    var newTvObjectArray = []
                    console.log(tvObjectArray)
                    tvObjectArray.forEach(function(tv, key) {
                        if (tv.poster_path) {
                            newTvObjectArray.push(tvObjectArray[key])
                        }
                    })
                    $rootScope.tvs = newTvObjectArray
                })

            dataService.getGenreIdMovie()
                .then(function(response) {
                    var genresIdArrayMovie = response.data.genres
                    var idCode = $scope.movies
                        // console.log(response.data.genres)
                        // console.log(idCode)
                    var arrayGenre = []
                    idCode.forEach(function(genreA, keyA) {
                        genresIdArrayMovie.forEach(function(genreB, keyB) {
                            for (var i = 0; i <= idCode.length; i++) {
                                if (genreA.genre_ids[i] === genreB.id) {
                                    arrayGenre.push(genreB.name)
                                    console.log(genreB.name)

                                }
                            }
                        })
                        console.log(arrayGenre)
                    })
                })


            dataService.getGenreIdTv()
                .then(function(response) {
                    console.log(response.data.genres)
                })

        }

        $scope.clickedMovie = function(index) {
            $rootScope.movieTitle = $scope.movies[index].title
            $rootScope.releaseDate = $scope.movies[index].release_date
            $rootScope.backdropPath = $scope.movies[index].backdrop_path
            $rootScope.overview = $scope.movies[index].overview
            $rootScope.popularity = $scope.movies[index].popularity
        }
        $scope.clickedSerie = function(index) {
            $rootScope.movieTitle = $scope.tvs[index].title
            $rootScope.releaseDate = $scope.tvs[index].release_date
            $rootScope.backdropPath = $scope.tvs[index].backdrop_path
            $rootScope.overview = $scope.tvs[index].overview
            $rootScope.popularity = $scope.tvs[index].popularity
        }

    })
    // URL'S
    // ______________________________________________________
    // SEARCH BY GENRE: https://api.themoviedb.org/3/discover/movie?api_key=d6ceefa77210945fb936085a6798e7a6&with_genres=16,28
    // SEARCH BY GENRE #2: https://api.themoviedb.org/3/genre/28/movies?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US&include_adult=false&sort_by=created_at.asc
    // SEARCH ACTOR/CAST BY NAME: https://api.themoviedb.org/3/search/person?api_key=d6ceefa77210945fb936085a6798e7a6&query=woody+allen
    // SEARCH WORKS BY ID NAME: https://api.themoviedb.org/3/person/1243/combined_credits?api_key=d6ceefa77210945fb936085a6798e7a6
