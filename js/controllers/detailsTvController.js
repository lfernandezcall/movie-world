angular.module('mainApp')
    .controller('detailsTvController', function ($scope, $routeParams, dataService) {
      var idTv = $routeParams.id

      dataService.getTvById(idTv)
        .then(function (response) {
          var detailsTv = response.data
          $scope.imageTv = detailsTv.backdrop_path
          $scope.tv = detailsTv

          console.log($scope.tv)
        })
    })
