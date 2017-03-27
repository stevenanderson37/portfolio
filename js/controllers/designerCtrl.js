angular.module('portfolioApp')
.controller('designerCtrl', function($scope, $stateParams, portfolioSrv) {
  $scope.stateName = 'Designer Portfolio';

  if ($(window).width() >= 850) {
    $("#section1-text").stick_in_parent({
      // "parent": ".intro-text-box",
      "bottoming": false
    });

    $("#section2-text").stick_in_parent({
      // "parent": ".intro-text-box",
      "bottoming": false
    });

    $("#section3-text").stick_in_parent({
      // "parent": ".intro-text-box",
      "bottoming": false
    });
  }

})
