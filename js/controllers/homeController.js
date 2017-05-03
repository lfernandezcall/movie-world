angular.module('mainApp')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getData = function() {


            var _movieName = $scope.userSearch

            dataService.getMoviesArray(_movieName)
                .then(function(response) {
                    var movieObjectArray = response.data.results
                        //var newMovieObjectArray = []
                    console.log(movieObjectArray)
                    $rootScope.movies = movieObjectArray.filter(function(movie) {
                        return movie.poster_path !== null
                    });

                    // movieObjectArray.forEach(function(movie, key) {
                    //     if (movie.poster_path) {
                    //         newMovieObjectArray.push(movieObjectArray[key])
                    //     }
                    // })
                    // $rootScope.movies = newMovieObjectArray

                })

            var _tvName = $scope.userSearch

            dataService.getTVArray(_tvName)
                .then(function(response) {
                    var tvObjectArray = response.data.results
                        //var newTvObjectArray = []
                    console.log(tvObjectArray)
                    $rootScope.tvs = tvObjectArray.filter(function(tv) {
                        return tv.poster_path !== null
                    });
                    // tvObjectArray.forEach(function(tv, key) {
                    //     if (tv.poster_path) {
                    //         newTvObjectArray.push(tvObjectArray[key])
                    //     }
                    // })
                    // $rootScope.tvs = newTvObjectArray
                })

            // dataService.getGenreIdMovie()
            //     .then(function(response) {
            //         var genresIdArrayMovie = response.data.genres
            //         var idGenreArrayEncoded = $scope.movies
            //             // console.log(response.data.genres)
            //         console.log(idGenreArrayEncoded)
            //         $rootScope.arrayGenre = []
            // idGenreArrayEncoded.forEach(function(genreA, keyA) {
            //     $rootScope.movieMouseSelected = genreA.genre_ids
            //     console.log("----------------")
            //     console.log($rootScope.movieMouseSelected)
            //     genresIdArrayMovie.forEach(function(genreB, keyB) {
            //          for (var i = 0; i <= idGenreArrayEncoded.length; i++) {
            //             if (genreA.genre_ids[i] === genreB.id) {
            //                 $rootScope.arrayGenre.push(genreB.name)
            //             }
            //         }    
            //     })
            //     console.log($rootScope.arrayGenre)
            // })


        }

        $scope.clickedMovie = function(index) {
            $rootScope.movieTitle = $scope.movies[index].title
            $rootScope.releaseDate = $scope.movies[index].release_date
            $rootScope.backdropPath = $scope.movies[index].backdrop_path
            $rootScope.overview = $scope.movies[index].overview
            $rootScope.popularity = $scope.movies[index].popularity
            $rootScope.genre_ids = $scope.movies[index].genre_ids

            if ($rootScope.backdropPath === null) {
                $rootScope.backdropPath = $scope.movies[index].poster_path
            }
            console.log($rootScope.genre_ids)

            dataService.getGenreIdMovie()
                .then(function(response) {
                    var genresIdArrayMovie = response.data.genres
                    var idGenreArrayEncoded = $scope.movies
                    $rootScope.arrayGenre = []
                    $rootScope.genre_ids.forEach(function(genre, key) {
                        genresIdArrayMovie.forEach(function(genreB, keyB) {
                            if (genre === genreB.id) {
                                $rootScope.arrayGenre.push(genreB.name)
                            }
                        })
                    })
                })
        }

        $scope.clickedTv = function(index) {
            $rootScope.movieTitle = $scope.tvs[index].name
            $rootScope.releaseDate = $scope.tvs[index].first_air_date
            $rootScope.backdropPath = $scope.tvs[index].backdrop_path
            $rootScope.overview = $scope.tvs[index].overview
            $rootScope.popularity = $scope.tvs[index].popularity
            $rootScope.genre_ids = $scope.tvs[index].genre_ids

            if ($rootScope.backdropPath === null) {
                $rootScope.backdropPath = $scope.tvs[index].poster_path
            }

            dataService.getGenreIdTv()
                .then(function(response) {
                    var genresIdArrayTv = response.data.genres
                    var idGenreArrayEncoded = $scope.tvs
                    $rootScope.arrayGenre = []
                    $rootScope.genre_ids.forEach(function(genre, key) {
                        genresIdArrayTv.forEach(function(genreB, keyB) {
                            if (genre === genreB.id) {
                                $rootScope.arrayGenre.push(genreB.name)
                            }
                        })
                    })
                })


        }
        // Here we link the $scope function with the $rootScope
        $rootScope.clickedMovie = $scope.clickedMovie
        $rootScope.clickedSerie = $scope.clickedSerie
    


    })
    // URL'S
    // ______________________________________________________
    // SEARCH BY GENRE: https://api.themoviedb.org/3/discover/movie?api_key=d6ceefa77210945fb936085a6798e7a6&with_genres=16,28
    // SEARCH BY GENRE #2: https://api.themoviedb.org/3/genre/28/movies?api_key=d6ceefa77210945fb936085a6798e7a6&language=en-US&include_adult=false&sort_by=created_at.asc
    // SEARCH ACTOR/CAST BY NAME: https://api.themoviedb.org/3/search/person?api_key=d6ceefa77210945fb936085a6798e7a6&query=woody+allen
    // SEARCH WORKS BY ID NAME: https://api.themoviedb.org/3/person/1243/combined_credits?api_key=d6ceefa77210945fb936085a6798e7a6
