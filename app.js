//Name the module
angular.module('GoldRushApp', [])

//create the controller
  .controller.('markerController', ['$scope', '$event', '$log', markerController])

//set mainController function
function markerController ($scope, $event, $log){

//declare coordinate array
var coordinateArr = []

//set callback function
  $scope.getCoordinates = function(){

//use of clientx/y to provide coordinates
    var x = event.clientX
    var y = event.clientY
    $log.log(x + ', ' + y)
    var coor = (x + ', ' + y)
    coordinateArr.push(coor)
  }
}


//make constructor function to create key/value pairs of coordinates
