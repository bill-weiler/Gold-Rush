//Name the module
angular.module('GoldRushApp', [])

//create the controller
  .controller.('markerController', ['$scope', '$event', '$log', markerController])

//set mainController function
function markerController ($scope, $event, $log){
  $scope.getCoordinates = function(){
    
//use of clientx/y to provide coordinates
    var x = event.clientX;
    var y = event.clientY;
    $log.log(x + y)
    var coor = (x + ', ' + y)
    coordinateArr.push()
  }
}
