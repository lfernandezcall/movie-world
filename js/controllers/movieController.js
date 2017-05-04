angular.module('mainApp')
    .controller('movieController', function($scope, $rootScope, dataService) {


        // $rootScope.clickedMovie = function(index) {
        //     $rootScope.movieTitle = $scope.movies[index].title
        //     $rootScope.releaseDate = $scope.movies[index].release_date
        //     $rootScope.backdropPath = $scope.movies[index].backdrop_path
        //     $rootScope.overview = $scope.movies[index].overview
        //     $rootScope.popularity = $scope.movies[index].popularity
        //     $rootScope.genre_ids = $scope.movies[index].genre_ids

        //     if ($rootScope.backdropPath === null) {
        //         $rootScope.backdropPath = $scope.movies[index].poster_path
        //     }
        //     console.log($rootScope.genre_ids)

        //     dataService.getGenreIdMovie()
        //         .then(function(response) {
        //             var genresIdArrayMovie = response.data.genres
        //             var idGenreArrayEncoded = $scope.movies
        //             $rootScope.arrayGenre = []
        //             $rootScope.genre_ids.forEach(function(genre, key) {
        //                 genresIdArrayMovie.forEach(function(genreB, keyB) {
        //                     if (genre === genreB.id) {
        //                         $rootScope.arrayGenre.push(genreB.name)
        //                     }
        //                 })
        //             })
        //         })
        // }

        // $rootScope.clickedTv = function(index) {
        //     $rootScope.movieTitle = $scope.tvs[index].name
        //     $rootScope.releaseDate = $scope.tvs[index].first_air_date
        //     $rootScope.backdropPath = $scope.tvs[index].backdrop_path
        //     $rootScope.overview = $scope.tvs[index].overview
        //     $rootScope.popularity = $scope.tvs[index].popularity
        //     $rootScope.genre_ids = $scope.tvs[index].genre_ids

        //     if ($rootScope.backdropPath === null) {
        //         $rootScope.backdropPath = $scope.tvs[index].poster_path
        //     }

        //     dataService.getGenreIdTv()
        //         .then(function(response) {
        //             var genresIdArrayTv = response.data.genres
        //             var idGenreArrayEncoded = $scope.tvs
        //             $rootScope.arrayGenre = []
        //             $rootScope.genre_ids.forEach(function(genre, key) {
        //                 genresIdArrayTv.forEach(function(genreB, keyB) {
        //                     if (genre === genreB.id) {
        //                         $rootScope.arrayGenre.push(genreB.name)
        //                     }
        //                 })
        //             })
        //         })


        // }
    })
