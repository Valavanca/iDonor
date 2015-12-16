'use strict';
angular.module('starter')
    .service('BloodBankService', function BloodBankService($http) {

        this.getBloodDirectory = function() {
            return $http({
                method: 'GET',
                cache:true,
                url: 'https://spreadsheets.google.com/feeds/list/1rB-DJ0lzAwlGVFzGt3EGbUponzv4WZZfkBN6LHwSeCg/1/public/basic?alt=json-in-script&callback=JSON_CALLBACK'
            });
        };
    });
