//Name the module
angular.module('GoldRushApp', [])

//create the controller
.controller('markerController', ['$scope', markerController])

  // declaring array to store marker objects ===== storage for later


//set mainController function
function markerController($scope) {
  $scope.markerArr = []
  $scope.getMarker = function() {
      var marker = {x: event.clientX.toString() + 'px', y: event.clientY.toString() + 'px'}
      // push to array
      $scope.markerArr.push(marker)
      console.log(markerArr);
    }
}
