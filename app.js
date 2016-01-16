angular.module("foodApp", [
                       
                            "ui.router",
                            "HomeModule",
                            "NutrientModule"

]).config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "Home/HomePartial.html",
          controller: "HomeController"
      }).state('single', {
          url: "/nutrients",
          templateUrl: "Nutrient/NutrientsPartial.html",
          controller: 'NutrientController'
      })
});