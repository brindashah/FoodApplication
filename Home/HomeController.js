(function () {
    'use strict';
    angular.module('HomeModule')
        .controller('HomeController', HomeController);
    //inject any serice or factory as needed
    HomeController.$inject = ['$scope', 'dataService', 'AppConstants', '$state'];

    function HomeController($scope, dataService, AppConstants, $state) {
        //#region model
        $scope.showdata = false;
        $scope.showerror = false;
        $scope.showfav = false;
        $scope.myfavoriteFood = [];


        // search function
        $scope.dosearch = function () {
                var url = AppConstants.datapi + $scope.searchstring + AppConstants.addsearch + AppConstants.apikey;
                dataService.getdata(url).then(function (resp) {
                    $scope.mydata = resp;
                    $scope.showdata = true;
                    $scope.showerror = false;
                    console.log($scope.mydata)
                }, function (err) {
                    $scope.showdata = false;
                    $scope.showerror = true;
                    $scope.myerror="please enter valid info"
                });
        }

        // hide error and info about food if input got changed
        $scope.hideeverything = function () {
            $scope.showdata = false;
            $scope.showerror = false;
        }
        $scope.goToDetails = function (mydata) {
            //storing item in local storage so that i can get it on next view
            localStorage.setItem('Myfood', JSON.stringify(mydata));
            $state.go('single');
        }
        $scope.makeitFav = function (item) {
            $scope.myfavoriteFood.push(item)
        };
        $scope.showFav = function () {
            $scope.showfav = true;
        }

    };
   
   
 
})();





