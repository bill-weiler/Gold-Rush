//Name the module
angular.module('GoldRushApp', [])

//create the controller
  .controller('markerController', ['$scope', markerController])

//set mainController function
function markerController ($scope){
// declaring array to store marker objects
  var markerArr = []

  function markerFactory (x, y){
    this.coordx = x
    this.coordy = y
  }


  $scope.getMarker = function(){
//use of clientx/y to provide coordinates
    var x = MouseEvent.clientX;
    var y = MouseEvent.clientY;
    // var coor = (x + ', ' + y) no longer necessary because we can push direct info
    markerArr.push(markerFactory(x, y))
  }
}
