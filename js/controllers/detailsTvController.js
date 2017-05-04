angular.module('mainApp')
    .controller('detailsTvController', function ($scope, $routeParams, dataService) {
      var idTv = $routeParams.id

      dataService.getTvById(idTv)
        .then(function (response) {
          var detailsTv = response.data
          if (detailsTv.backdrop_path === null) { 
          	$scope.imageTv = detailsTv.poster_path
          }
          else { $scope.imageTv = detailsTv.backdrop_path}
          $scope.tv = detailsTv

          console.log($scope.tv)
        })
    })
