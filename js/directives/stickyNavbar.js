angular.module('portfolioApp')
.directive('stickyNavbar', function() {

  return {
    restrict: 'AE',
    templateUrl: '../views/stickyNavbar.html',
    controller: function($scope, portfolioSrv) {

      // STICKY NAVBAR WITH JQUERY //
      // var headerContainerHeight = $('.header-container').height();
      var num = $('.header-container').height(); //number of pixels before modifying styles

      $(window).bind('scroll', function () {
        if ($(window).scrollTop() >= num) {
          $('.sticky-navbar').removeClass('fixed-navbar');
        } else {
          $('.sticky-navbar').addClass('fixed-navbar');
        }
      });

      // SOFT SCROLL //

      $(document).ready(function() {
        $(document).ready(function() {
          $(function() {
            // Select link by id and add click event
            $('#sticky-about-link').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });
          $(function() {
            // Select link by id and add click event
            $('#sticky-developer-link').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });
          $(function() {
            // Select link by id and add click event
            $('#sticky-designer-link').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });
          $(function() {
            // Select link by id and add click event
            $('#sticky-contact-link').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });

        });
      });

    }
  }


});
