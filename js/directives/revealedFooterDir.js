angular.module("portfolioApp")
.directive('revealedFooterDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './views/revealedFooterTmpl.html',
    controller: function($scope, portfolioSrv) {

      $scope.openMailer = function () {
        window.location.href = "mailto:happygoatdesigns@gmail.com?subject=&body=";
      };

    }
  }


});
