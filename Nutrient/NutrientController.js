(function () {
    'use strict';
    angular.module('NutrientModule')
        .controller('NutrientController', NutrientController);
    //inject any serice or factory as needed
    NutrientController.$inject = ['$scope', 'dataService', 'AppConstants', '$state'];

    function NutrientController($scope, dataService, AppConstants, $state) {
        $scope.mydata = JSON.parse(localStorage.getItem("Myfood"));
    }



})();





