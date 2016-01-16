(function () {
    'use strict';

    angular.module('foodApp').constant('AppConstants', {
        'datapi': 'http://api.nal.usda.gov/ndb/reports/?ndbno=',
        'addsearch':"&type=f&format=json&api_key=",
        'apikey': "DEMO_KEY"
    });
})();