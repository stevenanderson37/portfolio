angular.module('portfolioApp')
.controller('homeCtrl', function($scope, $stateParams, portfolioSrv) {
  $scope.stateName = 'Home';

  $(document).ready(function() {
    $(document).ready(function() {
      $(function() {
        // Select link by id and add click event
        $('#about-link').click(function() {

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
        $('#developer-link').click(function() {

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
        $('#designer-link').click(function() {

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
        $('#contact-link').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      $(function() {
        // Select link by id and add click event
        $('#anchor1').click(function() {

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
        $('#anchor2').click(function() {

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
        $('#anchor3').click(function() {

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
        $('#anchor4').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
        // Select link by id and add click event
        $('#anchor5').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#header-section").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });

      // vv STICKY NAVBAR vv //

      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-about-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#about-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-developer-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#developer-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-designer-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#designer-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
      // $(function() {
      //   // Select link by id and add click event
      //   $('#sticky-contact-link').click(function() {
      //
      //     // Animate Scroll to #bottom
      //     $('html,body').animate({
      //       scrollTop: $("#contact-section").offset().top }, // Tell it to scroll to the top #bottom
      //       2000 // How long scroll will take in milliseconds
      //     );
      //
      //     // Prevent default behavior of link
      //     return false;
      //   });
      // });
    });
  });

})
