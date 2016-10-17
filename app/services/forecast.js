'use strict';

// Calls the Dark Sky API, returns the resulting JSON
angular.module('DarkSky')
    .factory('forecast', ['$http', function($http) {
        var url = 'https://api.darksky.net/forecast/d545dfd43b28ee98f767b4eaf6b7b454/42.3601,-71.0589';
        var testUrl = 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json';

        var forecast = {};

        forecast.getWeather = function(callback) {
            console.log('Began the API call');
            $http.get(url)
                .success(function(data) {
                    callback(data);
                    console.log("Returned the Dark Sky data");
            })
                .error(function(err) {
                    callback(err);
                    console.log('Something fucked up in the API call...');
                });
        };

        return forecast;
    }]);