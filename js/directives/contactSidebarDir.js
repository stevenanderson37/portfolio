angular.module('portfolioApp')
.directive('contactSidebar', function() {

  return {
    restrict: 'AE',
    templateUrl: '../views/contactSidebarTmpl.html',
    controller: function($scope, portfolioSrv) {

      // STICKY NAVBAR WITH JQUERY //
      // var headerContainerHeight = $('.header-container').height();
      var num = $('.header-container').height(); //number of pixels before modifying styles
      var aboutHeight = $('.home-about-me').height();
      var developerHeight = $('.home-developer-portfolio').height();
      var designerHeight = $('.home-design-portfolio').height();

      $(window).bind('scroll', function () {
        if ($(window).scrollTop() >= num && $(window).scrollTop() <= num + aboutHeight + developerHeight + designerHeight - 400) {
          $('.contact-icons-sidebar').addClass('fixed-sidebar');
        } else {
          $('.contact-icons-sidebar').removeClass('fixed-sidebar');
        }
      });

      $scope.openMailer = function () {
        window.location.href = "mailto:happygoatdesigns@gmail.com?subject=&body=";
      };

    }
  }


});
