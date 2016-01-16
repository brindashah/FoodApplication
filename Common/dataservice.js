(function () {
    'use strict';

    angular.module('foodApp').factory('dataService', dataService);

    dataService.$inject = ['$http', '$q'];

    function dataService($http, $q) {

        function Service() {
            var vm = this;
            vm.getdata = function (url) {
                var deferred = $q.defer();
                $http.get(url)
                   .success(function (response) {
                       localStorage.setItem('myfooddata', JSON.stringify(response));
                       deferred.resolve(response);
                   })
                   .error(function (response) {
                       deferred.reject(response);
                   });
                return deferred.promise;
            };
        }
        return new Service();
    };

})();

