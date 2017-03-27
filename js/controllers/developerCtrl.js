angular.module('portfolioApp')
.controller('developerCtrl', function($scope, $stateParams, portfolioSrv) {
  $scope.stateName = 'Developer Portfolio';

  if ($(window).width() >= 850) {
    $(".sticky-position-box").stick_in_parent({
      "parent": ".intro-text-box",
      "bottoming": false
    });
  }

  // $("#section1-text").stick_in_parent({
  //   // "parent": ".intro-text-box",
  //   "bottoming": false
  // });
  //
  // $("#section2-text").stick_in_parent({
  //   // "parent": ".intro-text-box",
  //   "bottoming": false
  // });
  //
  // $("#section3-text").stick_in_parent({
  //   // "parent": ".intro-text-box",
  //   "bottoming": false
  // });


});
