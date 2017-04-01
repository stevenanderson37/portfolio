angular.module('portfolioApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/portfolio');

  $stateProvider
    .state('home', {
      url: "/portfolio",
      templateUrl: "../views/homeView.html",
      controller: "homeCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "../views/aboutView.html",
      controller: "aboutCtrl"
    })
    .state('developer', {
      url: "/developer",
      templateUrl: "../views/developerView.html",
      controller: "developerCtrl"
    })
    .state('designer', {
      url: "/designer",
      templateUrl: "../views/designerView.html",
      controller: "designerCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../views/contactView.html",
      controller: "contactCtrl"
    });

})
