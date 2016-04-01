
// Main Angular App
angular.module('tennisApp', [])
.controller('MainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('This is helloWorld() working in mainCtrl!');
  };
})

/* NOT CURRENTLY WORKING
.directive('intensityBanner', function() {
  return {
    controller: 'mainCtrl',
    templateUrl: 'public/views/intensityBanner.html'
  };
});
*/




// Slick Plugin Settings
$(document).ready(function(){
      $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: true,
        infinite: true,
        variableWidth: true
      });
    });
