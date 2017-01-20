'use strict';

//Main controller file for the Dark Sky-based weather app
angular.module('DarkSky').controller('MainController', ['$scope', 'forecast', 'location', function ($scope, forecast, location) {
    
    console.log('Within main.controller, about to run forecast promise, then parse the location data')
    forecast.getWeather(function (data) {
        console.log('Retrieved data from the Dark Sky API');
        console.log(data);

        $scope.weatherData = data;

        // TODO :: use Google's Geocoding API to do an address lookup
        var latLong = {
            lat: data.latitude,
            long: data.longitude
        };

        console.log('Looking for the location at this latitude:' + data.latitude);
        console.log('Looking for the location at this longitude:' + data.longitude);

        // Nest the service calls to keep it async
        // TODO :: refactor these into promises
        // TODO :: even better, make the GET requests in tandem to use more bandwidth/increase load speed
        location.getAddress(latLong, function (data) {
            console.log('Retrieved location data from the Geocode API. About to begin cleaning process.');
            // Parses the returned JSON to build the city/state format we want
            var results = data.results[0];
            var city = '';
            var state = '';

            for (var i = 0; i < results.address_components.length; i += 1) {
                var curComponent = results.address_components[i];
                var curType = curComponent.types[0];
                if (curType == 'locality') {
                    city = curComponent.long_name;
                    console.log('Found the city name: ' + curComponent.long_name);
                };
                if (curType == 'administrative_area_level_1') {
                    state = curComponent.short_name;
                    console.log('Found the state name: ' + curComponent.short_name);
                };
            };

            $scope.loc = city + ', ' + state;
            console.log('Stored the location data');
        });


        var cleanData = function(data) {
            // Five-Day Forecast
            // Gets integer for the day/week
            var tomorrow = new Date(data.daily.data[0].time * 1000).getDay();

            var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

            var forecast = [];
            var cur = tomorrow;
            for(var i = tomorrow; i < tomorrow + 5; i += 1){
                // Acts as a modulo function for the day selection
                if (cur == 7) {
                    cur = 0;
                };
                forecast.push(days[cur]);
                cur += 1;
            }

            $scope.weekly = forecast;
        };

        cleanData(data);

    });

    // var data = {
    //     "latitude": 42.3601,
    //     "longitude": -71.0589,
    //     "timezone": "America/New_York",
    //     "offset": -5,
    //     "currently": {
    //         "time": 1484716315,
    //         "summary": "Drizzle",
    //         "icon": "rain",
    //         "nearestStormDistance": 0,
    //         "precipIntensity": 0.0048,
    //         "precipIntensityError": 0.0015,
    //         "precipProbability": 0.49,
    //         "precipType": "rain",
    //         "temperature": 37.59,
    //         "apparentTemperature": 30.96,
    //         "dewPoint": 36.08,
    //         "humidity": 0.94,
    //         "windSpeed": 9.37,
    //         "windBearing": 104,
    //         "visibility": 4.13,
    //         "cloudCover": 0.87,
    //         "pressure": 1019.46,
    //         "ozone": 283.09
    //     },
    //     "minutely": {
    //         "summary": "Drizzle stopping in 1 min., starting again 6 min. later.",
    //         "icon": "rain",
    //         "data": [
    //             {
    //                 "time": 1484716260,
    //                 "precipIntensity": 0.0058,
    //                 "precipIntensityError": 0.0013,
    //                 "precipProbability": 0.61,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716320,
    //                 "precipIntensity": 0.0047,
    //                 "precipIntensityError": 0.0015,
    //                 "precipProbability": 0.48,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716380,
    //                 "precipIntensity": 0.0041,
    //                 "precipIntensityError": 0.0015,
    //                 "precipProbability": 0.41,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716440,
    //                 "precipIntensity": 0.0034,
    //                 "precipIntensityError": 0.0014,
    //                 "precipProbability": 0.33,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716500,
    //                 "precipIntensity": 0.0031,
    //                 "precipIntensityError": 0.0012,
    //                 "precipProbability": 0.3,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716560,
    //                 "precipIntensity": 0.0031,
    //                 "precipIntensityError": 0.0012,
    //                 "precipProbability": 0.3,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716620,
    //                 "precipIntensity": 0.0039,
    //                 "precipIntensityError": 0.0016,
    //                 "precipProbability": 0.39,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716680,
    //                 "precipIntensity": 0.0041,
    //                 "precipIntensityError": 0.0018,
    //                 "precipProbability": 0.41,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716740,
    //                 "precipIntensity": 0.0046,
    //                 "precipIntensityError": 0.0021,
    //                 "precipProbability": 0.47,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716800,
    //                 "precipIntensity": 0.0055,
    //                 "precipIntensityError": 0.0026,
    //                 "precipProbability": 0.57,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716860,
    //                 "precipIntensity": 0.0056,
    //                 "precipIntensityError": 0.0028,
    //                 "precipProbability": 0.59,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716920,
    //                 "precipIntensity": 0.0056,
    //                 "precipIntensityError": 0.0029,
    //                 "precipProbability": 0.59,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484716980,
    //                 "precipIntensity": 0.0059,
    //                 "precipIntensityError": 0.0032,
    //                 "precipProbability": 0.62,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717040,
    //                 "precipIntensity": 0.0065,
    //                 "precipIntensityError": 0.0034,
    //                 "precipProbability": 0.69,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717100,
    //                 "precipIntensity": 0.0066,
    //                 "precipIntensityError": 0.0035,
    //                 "precipProbability": 0.7,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717160,
    //                 "precipIntensity": 0.0068,
    //                 "precipIntensityError": 0.0036,
    //                 "precipProbability": 0.72,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717220,
    //                 "precipIntensity": 0.0087,
    //                 "precipIntensityError": 0.0043,
    //                 "precipProbability": 0.94,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717280,
    //                 "precipIntensity": 0.0087,
    //                 "precipIntensityError": 0.0043,
    //                 "precipProbability": 0.94,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717340,
    //                 "precipIntensity": 0.0098,
    //                 "precipIntensityError": 0.0047,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717400,
    //                 "precipIntensity": 0.0106,
    //                 "precipIntensityError": 0.0048,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717460,
    //                 "precipIntensity": 0.0113,
    //                 "precipIntensityError": 0.005,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717520,
    //                 "precipIntensity": 0.0115,
    //                 "precipIntensityError": 0.0051,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717580,
    //                 "precipIntensity": 0.0117,
    //                 "precipIntensityError": 0.0051,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717640,
    //                 "precipIntensity": 0.0123,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717700,
    //                 "precipIntensity": 0.0133,
    //                 "precipIntensityError": 0.0055,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717760,
    //                 "precipIntensity": 0.0136,
    //                 "precipIntensityError": 0.0056,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717820,
    //                 "precipIntensity": 0.0162,
    //                 "precipIntensityError": 0.0062,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717880,
    //                 "precipIntensity": 0.0162,
    //                 "precipIntensityError": 0.0062,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484717940,
    //                 "precipIntensity": 0.0175,
    //                 "precipIntensityError": 0.0064,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718000,
    //                 "precipIntensity": 0.0176,
    //                 "precipIntensityError": 0.0064,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718060,
    //                 "precipIntensity": 0.0189,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718120,
    //                 "precipIntensity": 0.0191,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718180,
    //                 "precipIntensity": 0.0192,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718240,
    //                 "precipIntensity": 0.0192,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718300,
    //                 "precipIntensity": 0.0195,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718360,
    //                 "precipIntensity": 0.0202,
    //                 "precipIntensityError": 0.0066,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718420,
    //                 "precipIntensity": 0.0212,
    //                 "precipIntensityError": 0.0066,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718480,
    //                 "precipIntensity": 0.021,
    //                 "precipIntensityError": 0.0066,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718540,
    //                 "precipIntensity": 0.0215,
    //                 "precipIntensityError": 0.0066,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718600,
    //                 "precipIntensity": 0.0213,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718660,
    //                 "precipIntensity": 0.0212,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718720,
    //                 "precipIntensity": 0.0212,
    //                 "precipIntensityError": 0.0065,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718780,
    //                 "precipIntensity": 0.0208,
    //                 "precipIntensityError": 0.0064,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718840,
    //                 "precipIntensity": 0.0205,
    //                 "precipIntensityError": 0.0063,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718900,
    //                 "precipIntensity": 0.0203,
    //                 "precipIntensityError": 0.0063,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484718960,
    //                 "precipIntensity": 0.02,
    //                 "precipIntensityError": 0.0063,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719020,
    //                 "precipIntensity": 0.0192,
    //                 "precipIntensityError": 0.006,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719080,
    //                 "precipIntensity": 0.0187,
    //                 "precipIntensityError": 0.0059,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719140,
    //                 "precipIntensity": 0.0184,
    //                 "precipIntensityError": 0.0059,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719200,
    //                 "precipIntensity": 0.0179,
    //                 "precipIntensityError": 0.0058,
    //                 "precipProbability": 1,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719260,
    //                 "precipIntensity": 0.0174,
    //                 "precipIntensityError": 0.0057,
    //                 "precipProbability": 0.99,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719320,
    //                 "precipIntensity": 0.0169,
    //                 "precipIntensityError": 0.0055,
    //                 "precipProbability": 0.99,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719380,
    //                 "precipIntensity": 0.0164,
    //                 "precipIntensityError": 0.0054,
    //                 "precipProbability": 0.98,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719440,
    //                 "precipIntensity": 0.0163,
    //                 "precipIntensityError": 0.0053,
    //                 "precipProbability": 0.98,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719500,
    //                 "precipIntensity": 0.0162,
    //                 "precipIntensityError": 0.0053,
    //                 "precipProbability": 0.97,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719560,
    //                 "precipIntensity": 0.0158,
    //                 "precipIntensityError": 0.0053,
    //                 "precipProbability": 0.97,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719620,
    //                 "precipIntensity": 0.0153,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 0.95,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719680,
    //                 "precipIntensity": 0.0149,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 0.94,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719740,
    //                 "precipIntensity": 0.0146,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 0.93,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719800,
    //                 "precipIntensity": 0.0144,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 0.91,
    //                 "precipType": "rain"
    //             },
    //             {
    //                 "time": 1484719860,
    //                 "precipIntensity": 0.0141,
    //                 "precipIntensityError": 0.0052,
    //                 "precipProbability": 0.89,
    //                 "precipType": "rain"
    //             }
    //         ]
    //     },
    //     "hourly": {
    //         "summary": "Light rain until tomorrow evening.",
    //         "icon": "rain",
    //         "data": [
    //             {
    //                 "time": 1484715600,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.016,
    //                 "precipProbability": 0.57,
    //                 "precipType": "rain",
    //                 "temperature": 37.49,
    //                 "apparentTemperature": 30.97,
    //                 "dewPoint": 35.93,
    //                 "humidity": 0.94,
    //                 "windSpeed": 9.08,
    //                 "windBearing": 106,
    //                 "visibility": 4.44,
    //                 "cloudCover": 0.84,
    //                 "pressure": 1019.87,
    //                 "ozone": 283.03
    //             },
    //             {
    //                 "time": 1484719200,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.022,
    //                 "precipProbability": 0.63,
    //                 "precipType": "rain",
    //                 "temperature": 38.01,
    //                 "apparentTemperature": 30.87,
    //                 "dewPoint": 36.71,
    //                 "humidity": 0.95,
    //                 "windSpeed": 10.7,
    //                 "windBearing": 94,
    //                 "visibility": 2.89,
    //                 "cloudCover": 0.98,
    //                 "pressure": 1017.8,
    //                 "ozone": 283.31
    //             },
    //             {
    //                 "time": 1484722800,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0423,
    //                 "precipProbability": 0.65,
    //                 "precipType": "rain",
    //                 "temperature": 37.85,
    //                 "apparentTemperature": 30.71,
    //                 "dewPoint": 37.02,
    //                 "humidity": 0.97,
    //                 "windSpeed": 10.63,
    //                 "windBearing": 91,
    //                 "visibility": 3.05,
    //                 "cloudCover": 0.99,
    //                 "pressure": 1016.72,
    //                 "ozone": 284.81
    //             },
    //             {
    //                 "time": 1484726400,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0397,
    //                 "precipProbability": 0.65,
    //                 "precipType": "rain",
    //                 "temperature": 38.07,
    //                 "apparentTemperature": 30.76,
    //                 "dewPoint": 37.15,
    //                 "humidity": 0.96,
    //                 "windSpeed": 11.14,
    //                 "windBearing": 88,
    //                 "visibility": 3.03,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.73,
    //                 "ozone": 286.82
    //             },
    //             {
    //                 "time": 1484730000,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.036,
    //                 "precipProbability": 0.63,
    //                 "precipType": "rain",
    //                 "temperature": 38.4,
    //                 "apparentTemperature": 31.03,
    //                 "dewPoint": 37.34,
    //                 "humidity": 0.96,
    //                 "windSpeed": 11.5,
    //                 "windBearing": 82,
    //                 "visibility": 3.22,
    //                 "cloudCover": 1,
    //                 "pressure": 1014.92,
    //                 "ozone": 288.69
    //             },
    //             {
    //                 "time": 1484733600,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0231,
    //                 "precipProbability": 0.58,
    //                 "precipType": "rain",
    //                 "temperature": 38.66,
    //                 "apparentTemperature": 31.26,
    //                 "dewPoint": 37.5,
    //                 "humidity": 0.96,
    //                 "windSpeed": 11.76,
    //                 "windBearing": 73,
    //                 "visibility": 4.06,
    //                 "cloudCover": 1,
    //                 "pressure": 1014.32,
    //                 "ozone": 290.16
    //             },
    //             {
    //                 "time": 1484737200,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.018,
    //                 "precipProbability": 0.55,
    //                 "precipType": "rain",
    //                 "temperature": 38.78,
    //                 "apparentTemperature": 31.19,
    //                 "dewPoint": 37.29,
    //                 "humidity": 0.94,
    //                 "windSpeed": 12.31,
    //                 "windBearing": 66,
    //                 "visibility": 5.02,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.93,
    //                 "ozone": 291.49
    //             },
    //             {
    //                 "time": 1484740800,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0218,
    //                 "precipProbability": 0.58,
    //                 "precipType": "rain",
    //                 "temperature": 38.88,
    //                 "apparentTemperature": 31.37,
    //                 "dewPoint": 37.35,
    //                 "humidity": 0.94,
    //                 "windSpeed": 12.16,
    //                 "windBearing": 62,
    //                 "visibility": 4.2,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.64,
    //                 "ozone": 292.73
    //             },
    //             {
    //                 "time": 1484744400,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0161,
    //                 "precipProbability": 0.54,
    //                 "precipType": "rain",
    //                 "temperature": 38.99,
    //                 "apparentTemperature": 31.63,
    //                 "dewPoint": 37.74,
    //                 "humidity": 0.95,
    //                 "windSpeed": 11.83,
    //                 "windBearing": 64,
    //                 "visibility": 4.69,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.57,
    //                 "ozone": 293.81
    //             },
    //             {
    //                 "time": 1484748000,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0135,
    //                 "precipProbability": 0.52,
    //                 "precipType": "rain",
    //                 "temperature": 39.65,
    //                 "apparentTemperature": 32.65,
    //                 "dewPoint": 38.39,
    //                 "humidity": 0.95,
    //                 "windSpeed": 11.33,
    //                 "windBearing": 62,
    //                 "visibility": 5.14,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.6,
    //                 "ozone": 294.8
    //             },
    //             {
    //                 "time": 1484751600,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0121,
    //                 "precipProbability": 0.51,
    //                 "precipType": "rain",
    //                 "temperature": 40.35,
    //                 "apparentTemperature": 33.59,
    //                 "dewPoint": 38.73,
    //                 "humidity": 0.94,
    //                 "windSpeed": 11.2,
    //                 "windBearing": 55,
    //                 "visibility": 5.19,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.51,
    //                 "ozone": 296.06
    //             },
    //             {
    //                 "time": 1484755200,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0073,
    //                 "precipProbability": 0.35,
    //                 "precipType": "rain",
    //                 "temperature": 41.35,
    //                 "apparentTemperature": 34.71,
    //                 "dewPoint": 39.78,
    //                 "humidity": 0.94,
    //                 "windSpeed": 11.53,
    //                 "windBearing": 52,
    //                 "visibility": 5.21,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.12,
    //                 "ozone": 298.2
    //             },
    //             {
    //                 "time": 1484758800,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0052,
    //                 "precipProbability": 0.22,
    //                 "precipType": "rain",
    //                 "temperature": 42.35,
    //                 "apparentTemperature": 36.11,
    //                 "dewPoint": 40.83,
    //                 "humidity": 0.94,
    //                 "windSpeed": 11.14,
    //                 "windBearing": 51,
    //                 "visibility": 5.53,
    //                 "cloudCover": 1,
    //                 "pressure": 1012.57,
    //                 "ozone": 300.6
    //             },
    //             {
    //                 "time": 1484762400,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0048,
    //                 "precipProbability": 0.2,
    //                 "precipType": "rain",
    //                 "temperature": 43.02,
    //                 "apparentTemperature": 36.81,
    //                 "dewPoint": 41.38,
    //                 "humidity": 0.94,
    //                 "windSpeed": 11.52,
    //                 "windBearing": 49,
    //                 "visibility": 5.75,
    //                 "cloudCover": 1,
    //                 "pressure": 1012.32,
    //                 "ozone": 301.73
    //             },
    //             {
    //                 "time": 1484766000,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0049,
    //                 "precipProbability": 0.2,
    //                 "precipType": "rain",
    //                 "temperature": 43.45,
    //                 "apparentTemperature": 37.6,
    //                 "dewPoint": 41.72,
    //                 "humidity": 0.94,
    //                 "windSpeed": 10.85,
    //                 "windBearing": 48,
    //                 "visibility": 5.97,
    //                 "cloudCover": 1,
    //                 "pressure": 1012.54,
    //                 "ozone": 300.44
    //             },
    //             {
    //                 "time": 1484769600,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0066,
    //                 "precipProbability": 0.3,
    //                 "precipType": "rain",
    //                 "temperature": 43.19,
    //                 "apparentTemperature": 37.58,
    //                 "dewPoint": 41.45,
    //                 "humidity": 0.94,
    //                 "windSpeed": 10.04,
    //                 "windBearing": 42,
    //                 "visibility": 5.98,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.02,
    //                 "ozone": 297.87
    //             },
    //             {
    //                 "time": 1484773200,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0092,
    //                 "precipProbability": 0.47,
    //                 "precipType": "rain",
    //                 "temperature": 42.98,
    //                 "apparentTemperature": 37.56,
    //                 "dewPoint": 41.4,
    //                 "humidity": 0.94,
    //                 "windSpeed": 9.47,
    //                 "windBearing": 38,
    //                 "visibility": 5.91,
    //                 "cloudCover": 1,
    //                 "pressure": 1013.53,
    //                 "ozone": 295.98
    //             },
    //             {
    //                 "time": 1484776800,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0063,
    //                 "precipProbability": 0.29,
    //                 "precipType": "rain",
    //                 "temperature": 42.74,
    //                 "apparentTemperature": 37.43,
    //                 "dewPoint": 41.22,
    //                 "humidity": 0.94,
    //                 "windSpeed": 9.08,
    //                 "windBearing": 36,
    //                 "visibility": 5.92,
    //                 "cloudCover": 1,
    //                 "pressure": 1014.08,
    //                 "ozone": 295.46
    //             },
    //             {
    //                 "time": 1484780400,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0061,
    //                 "precipProbability": 0.27,
    //                 "precipType": "rain",
    //                 "temperature": 42.07,
    //                 "apparentTemperature": 36.59,
    //                 "dewPoint": 40.85,
    //                 "humidity": 0.95,
    //                 "windSpeed": 9.1,
    //                 "windBearing": 36,
    //                 "visibility": 6.48,
    //                 "cloudCover": 1,
    //                 "pressure": 1014.57,
    //                 "ozone": 295.61
    //             },
    //             {
    //                 "time": 1484784000,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0055,
    //                 "precipProbability": 0.24,
    //                 "precipType": "rain",
    //                 "temperature": 41.38,
    //                 "apparentTemperature": 35.96,
    //                 "dewPoint": 40.36,
    //                 "humidity": 0.96,
    //                 "windSpeed": 8.63,
    //                 "windBearing": 36,
    //                 "visibility": 8.96,
    //                 "cloudCover": 0.97,
    //                 "pressure": 1014.92,
    //                 "ozone": 296.31
    //             },
    //             {
    //                 "time": 1484787600,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0043,
    //                 "precipProbability": 0.17,
    //                 "precipType": "rain",
    //                 "temperature": 40.73,
    //                 "apparentTemperature": 35.33,
    //                 "dewPoint": 39.74,
    //                 "humidity": 0.96,
    //                 "windSpeed": 8.28,
    //                 "windBearing": 39,
    //                 "visibility": 6.68,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.14,
    //                 "ozone": 297.49
    //             },
    //             {
    //                 "time": 1484791200,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0027,
    //                 "precipProbability": 0.08,
    //                 "precipType": "rain",
    //                 "temperature": 40.05,
    //                 "apparentTemperature": 34.47,
    //                 "dewPoint": 39.01,
    //                 "humidity": 0.96,
    //                 "windSpeed": 8.34,
    //                 "windBearing": 38,
    //                 "visibility": 6.77,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.29,
    //                 "ozone": 299.23
    //             },
    //             {
    //                 "time": 1484794800,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0012,
    //                 "precipProbability": 0.02,
    //                 "precipType": "rain",
    //                 "temperature": 39.47,
    //                 "apparentTemperature": 34.15,
    //                 "dewPoint": 38.07,
    //                 "humidity": 0.95,
    //                 "windSpeed": 7.62,
    //                 "windBearing": 41,
    //                 "visibility": 7.13,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.35,
    //                 "ozone": 301.66
    //             },
    //             {
    //                 "time": 1484798400,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 38.95,
    //                 "apparentTemperature": 33.93,
    //                 "dewPoint": 37.2,
    //                 "humidity": 0.93,
    //                 "windSpeed": 6.9,
    //                 "windBearing": 36,
    //                 "visibility": 5.88,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.3,
    //                 "ozone": 305.07
    //             },
    //             {
    //                 "time": 1484802000,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 38.94,
    //                 "apparentTemperature": 34.19,
    //                 "dewPoint": 37.24,
    //                 "humidity": 0.94,
    //                 "windSpeed": 6.47,
    //                 "windBearing": 26,
    //                 "visibility": 7.33,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.16,
    //                 "ozone": 309.17
    //             },
    //             {
    //                 "time": 1484805600,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 38.24,
    //                 "apparentTemperature": 33.75,
    //                 "dewPoint": 36.61,
    //                 "humidity": 0.94,
    //                 "windSpeed": 5.87,
    //                 "windBearing": 16,
    //                 "visibility": 8.26,
    //                 "cloudCover": 0.99,
    //                 "pressure": 1015.07,
    //                 "ozone": 313.27
    //             },
    //             {
    //                 "time": 1484809200,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 37.69,
    //                 "apparentTemperature": 33.44,
    //                 "dewPoint": 36.16,
    //                 "humidity": 0.94,
    //                 "windSpeed": 5.41,
    //                 "windBearing": 3,
    //                 "visibility": 8.99,
    //                 "cloudCover": 0.99,
    //                 "pressure": 1015.09,
    //                 "ozone": 317.2
    //             },
    //             {
    //                 "time": 1484812800,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 37.24,
    //                 "apparentTemperature": 33.03,
    //                 "dewPoint": 35.84,
    //                 "humidity": 0.95,
    //                 "windSpeed": 5.25,
    //                 "windBearing": 345,
    //                 "visibility": 9.45,
    //                 "cloudCover": 0.98,
    //                 "pressure": 1015.14,
    //                 "ozone": 321.11
    //             },
    //             {
    //                 "time": 1484816400,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.0008,
    //                 "precipProbability": 0.01,
    //                 "precipType": "rain",
    //                 "temperature": 36.91,
    //                 "apparentTemperature": 32.65,
    //                 "dewPoint": 35.62,
    //                 "humidity": 0.95,
    //                 "windSpeed": 5.24,
    //                 "windBearing": 332,
    //                 "visibility": 9.71,
    //                 "cloudCover": 0.98,
    //                 "pressure": 1015.22,
    //                 "ozone": 324.83
    //             },
    //             {
    //                 "time": 1484820000,
    //                 "summary": "Overcast",
    //                 "icon": "cloudy",
    //                 "precipIntensity": 0.004,
    //                 "precipProbability": 0.15,
    //                 "precipType": "rain",
    //                 "temperature": 36.7,
    //                 "apparentTemperature": 32.65,
    //                 "dewPoint": 35.55,
    //                 "humidity": 0.96,
    //                 "windSpeed": 4.93,
    //                 "windBearing": 323,
    //                 "visibility": 10,
    //                 "cloudCover": 0.99,
    //                 "pressure": 1015.3,
    //                 "ozone": 328.28
    //             },
    //             {
    //                 "time": 1484823600,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0081,
    //                 "precipProbability": 0.4,
    //                 "precipType": "rain",
    //                 "temperature": 36.69,
    //                 "apparentTemperature": 33.05,
    //                 "dewPoint": 35.65,
    //                 "humidity": 0.96,
    //                 "windSpeed": 4.47,
    //                 "windBearing": 316,
    //                 "visibility": 10,
    //                 "cloudCover": 1,
    //                 "pressure": 1015.38,
    //                 "ozone": 331.52
    //             },
    //             {
    //                 "time": 1484827200,
    //                 "summary": "Light Rain",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0101,
    //                 "precipProbability": 0.49,
    //                 "precipType": "rain",
    //                 "temperature": 37.15,
    //                 "apparentTemperature": 33.91,
    //                 "dewPoint": 36.02,
    //                 "humidity": 0.96,
    //                 "windSpeed": 4.12,
    //                 "windBearing": 309,
    //                 "visibility": 10,
    //                 "cloudCover": 0.98,
    //                 "pressure": 1015.44,
    //                 "ozone": 334.55
    //             },
    //             {
    //                 "time": 1484830800,
    //                 "summary": "Drizzle",
    //                 "icon": "rain",
    //                 "precipIntensity": 0.0079,
    //                 "precipProbability": 0.39,
    //                 "precipType": "rain",
    //                 "temperature": 38.26,
    //                 "apparentTemperature": 35.32,
    //                 "dewPoint": 36.72,
    //                 "humidity": 0.94,
    //                 "windSpeed": 3.99,
    //                 "windBearing": 303,
    //                 "visibility": 10,
    //                 "cloudCover": 0.93,
    //                 "pressure": 1015.52,
    //                 "ozone": 337.58
    //             },
    //             {
    //                 "time": 1484834400,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0.0034,
    //                 "precipProbability": 0.12,
    //                 "precipType": "rain",
    //                 "temperature": 39.79,
    //                 "apparentTemperature": 37.06,
    //                 "dewPoint": 37.6,
    //                 "humidity": 0.92,
    //                 "windSpeed": 4.02,
    //                 "windBearing": 297,
    //                 "visibility": 10,
    //                 "cloudCover": 0.87,
    //                 "pressure": 1015.62,
    //                 "ozone": 340.4
    //             },
    //             {
    //                 "time": 1484838000,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 41.33,
    //                 "apparentTemperature": 38.82,
    //                 "dewPoint": 38.41,
    //                 "humidity": 0.89,
    //                 "windSpeed": 4.04,
    //                 "windBearing": 293,
    //                 "visibility": 10,
    //                 "cloudCover": 0.82,
    //                 "pressure": 1015.57,
    //                 "ozone": 342.25
    //             },
    //             {
    //                 "time": 1484841600,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 42.99,
    //                 "apparentTemperature": 40.52,
    //                 "dewPoint": 39.19,
    //                 "humidity": 0.86,
    //                 "windSpeed": 4.31,
    //                 "windBearing": 288,
    //                 "visibility": 10,
    //                 "cloudCover": 0.81,
    //                 "pressure": 1015.28,
    //                 "ozone": 342.91
    //             },
    //             {
    //                 "time": 1484845200,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 44.76,
    //                 "apparentTemperature": 42.22,
    //                 "dewPoint": 39.96,
    //                 "humidity": 0.83,
    //                 "windSpeed": 4.77,
    //                 "windBearing": 285,
    //                 "visibility": 10,
    //                 "cloudCover": 0.82,
    //                 "pressure": 1014.84,
    //                 "ozone": 342.6
    //             },
    //             {
    //                 "time": 1484848800,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 46.08,
    //                 "apparentTemperature": 43.47,
    //                 "dewPoint": 40.57,
    //                 "humidity": 0.81,
    //                 "windSpeed": 5.22,
    //                 "windBearing": 283,
    //                 "visibility": 10,
    //                 "cloudCover": 0.79,
    //                 "pressure": 1014.49,
    //                 "ozone": 341.31
    //             },
    //             {
    //                 "time": 1484852400,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 46.68,
    //                 "apparentTemperature": 44.14,
    //                 "dewPoint": 40.93,
    //                 "humidity": 0.8,
    //                 "windSpeed": 5.29,
    //                 "windBearing": 284,
    //                 "visibility": 10,
    //                 "cloudCover": 0.66,
    //                 "pressure": 1014.31,
    //                 "ozone": 338.79
    //             },
    //             {
    //                 "time": 1484856000,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 45.53,
    //                 "apparentTemperature": 42.7,
    //                 "dewPoint": 39.91,
    //                 "humidity": 0.81,
    //                 "windSpeed": 5.41,
    //                 "windBearing": 288,
    //                 "visibility": 10,
    //                 "cloudCover": 0.46,
    //                 "pressure": 1014.23,
    //                 "ozone": 335.3
    //             },
    //             {
    //                 "time": 1484859600,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-day",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 43.55,
    //                 "apparentTemperature": 40.28,
    //                 "dewPoint": 38.35,
    //                 "humidity": 0.82,
    //                 "windSpeed": 5.53,
    //                 "windBearing": 292,
    //                 "visibility": 10,
    //                 "cloudCover": 0.34,
    //                 "pressure": 1014.33,
    //                 "ozone": 331.46
    //             },
    //             {
    //                 "time": 1484863200,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 41.32,
    //                 "apparentTemperature": 37.63,
    //                 "dewPoint": 36.98,
    //                 "humidity": 0.84,
    //                 "windSpeed": 5.55,
    //                 "windBearing": 296,
    //                 "visibility": 10,
    //                 "cloudCover": 0.3,
    //                 "pressure": 1014.75,
    //                 "ozone": 327.27
    //             },
    //             {
    //                 "time": 1484866800,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 39.64,
    //                 "apparentTemperature": 35.68,
    //                 "dewPoint": 36.36,
    //                 "humidity": 0.88,
    //                 "windSpeed": 5.5,
    //                 "windBearing": 301,
    //                 "visibility": 10,
    //                 "cloudCover": 0.3,
    //                 "pressure": 1015.34,
    //                 "ozone": 322.74
    //             },
    //             {
    //                 "time": 1484870400,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 38.81,
    //                 "apparentTemperature": 34.58,
    //                 "dewPoint": 36.27,
    //                 "humidity": 0.9,
    //                 "windSpeed": 5.67,
    //                 "windBearing": 307,
    //                 "visibility": 10,
    //                 "cloudCover": 0.36,
    //                 "pressure": 1015.85,
    //                 "ozone": 318.6
    //             },
    //             {
    //                 "time": 1484874000,
    //                 "summary": "Partly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 38.15,
    //                 "apparentTemperature": 33.37,
    //                 "dewPoint": 35.74,
    //                 "humidity": 0.91,
    //                 "windSpeed": 6.26,
    //                 "windBearing": 312,
    //                 "visibility": 10,
    //                 "cloudCover": 0.53,
    //                 "pressure": 1016.17,
    //                 "ozone": 314.88
    //             },
    //             {
    //                 "time": 1484877600,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 37.19,
    //                 "apparentTemperature": 31.75,
    //                 "dewPoint": 34.63,
    //                 "humidity": 0.9,
    //                 "windSpeed": 7,
    //                 "windBearing": 314,
    //                 "visibility": 10,
    //                 "cloudCover": 0.76,
    //                 "pressure": 1016.42,
    //                 "ozone": 311.54
    //             },
    //             {
    //                 "time": 1484881200,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 35.93,
    //                 "apparentTemperature": 29.98,
    //                 "dewPoint": 33.29,
    //                 "humidity": 0.9,
    //                 "windSpeed": 7.42,
    //                 "windBearing": 313,
    //                 "visibility": 10,
    //                 "cloudCover": 0.89,
    //                 "pressure": 1016.6,
    //                 "ozone": 309.22
    //             },
    //             {
    //                 "time": 1484884800,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 34.46,
    //                 "apparentTemperature": 28.28,
    //                 "dewPoint": 31.97,
    //                 "humidity": 0.9,
    //                 "windSpeed": 7.28,
    //                 "windBearing": 308,
    //                 "visibility": 10,
    //                 "cloudCover": 0.82,
    //                 "pressure": 1016.69,
    //                 "ozone": 308.38
    //             },
    //             {
    //                 "time": 1484888400,
    //                 "summary": "Mostly Cloudy",
    //                 "icon": "partly-cloudy-night",
    //                 "precipIntensity": 0,
    //                 "precipProbability": 0,
    //                 "temperature": 34.12,
    //                 "apparentTemperature": 28.16,
    //                 "dewPoint": 31.83,
    //                 "humidity": 0.91,
    //                 "windSpeed": 6.84,
    //                 "windBearing": 300,
    //                 "visibility": 10,
    //                 "cloudCover": 0.68,
    //                 "pressure": 1016.69,
    //                 "ozone": 308.55
    //             }
    //         ]
    //     },
    //     "daily": {
    //         "summary": "Light rain throughout the week, with temperatures rising to 58°F on Tuesday.",
    //         "icon": "rain",
    //         "data": [
    //             {
    //                 "time": 1484715600,
    //                 "summary": "Light rain until evening.",
    //                 "icon": "rain",
    //                 "sunriseTime": 1484741418,
    //                 "sunsetTime": 1484775683,
    //                 "moonPhase": 0.71,
    //                 "precipIntensity": 0.0136,
    //                 "precipIntensityMax": 0.0423,
    //                 "precipIntensityMaxTime": 1484722800,
    //                 "precipProbability": 0.65,
    //                 "precipType": "rain",
    //                 "temperatureMin": 37.49,
    //                 "temperatureMinTime": 1484715600,
    //                 "temperatureMax": 43.45,
    //                 "temperatureMaxTime": 1484766000,
    //                 "apparentTemperatureMin": 30.71,
    //                 "apparentTemperatureMinTime": 1484722800,
    //                 "apparentTemperatureMax": 37.6,
    //                 "apparentTemperatureMaxTime": 1484766000,
    //                 "dewPoint": 38.92,
    //                 "humidity": 0.95,
    //                 "windSpeed": 9.63,
    //                 "windBearing": 59,
    //                 "visibility": 5.3,
    //                 "cloudCover": 0.99,
    //                 "pressure": 1014.56,
    //                 "ozone": 294.64
    //             },
    //             {
    //                 "time": 1484802000,
    //                 "summary": "Light rain in the morning.",
    //                 "icon": "rain",
    //                 "sunriseTime": 1484827782,
    //                 "sunsetTime": 1484862156,
    //                 "moonPhase": 0.74,
    //                 "precipIntensity": 0.0015,
    //                 "precipIntensityMax": 0.0101,
    //                 "precipIntensityMaxTime": 1484827200,
    //                 "precipProbability": 0.49,
    //                 "precipType": "rain",
    //                 "temperatureMin": 34.46,
    //                 "temperatureMinTime": 1484884800,
    //                 "temperatureMax": 46.68,
    //                 "temperatureMaxTime": 1484852400,
    //                 "apparentTemperatureMin": 28.28,
    //                 "apparentTemperatureMinTime": 1484884800,
    //                 "apparentTemperatureMax": 44.14,
    //                 "apparentTemperatureMaxTime": 1484852400,
    //                 "dewPoint": 36.9,
    //                 "humidity": 0.9,
    //                 "windSpeed": 4.75,
    //                 "windBearing": 313,
    //                 "visibility": 9.74,
    //                 "cloudCover": 0.77,
    //                 "pressure": 1015.33,
    //                 "ozone": 326.88
    //             },
    //             {
    //                 "time": 1484888400,
    //                 "summary": "Mostly cloudy throughout the day.",
    //                 "icon": "partly-cloudy-day",
    //                 "sunriseTime": 1484914145,
    //                 "sunsetTime": 1484948630,
    //                 "moonPhase": 0.77,
    //                 "precipIntensity": 0,
    //                 "precipIntensityMax": 0,
    //                 "precipProbability": 0,
    //                 "temperatureMin": 32.63,
    //                 "temperatureMinTime": 1484906400,
    //                 "temperatureMax": 46.14,
    //                 "temperatureMaxTime": 1484942400,
    //                 "apparentTemperatureMin": 26.35,
    //                 "apparentTemperatureMinTime": 1484902800,
    //                 "apparentTemperatureMax": 46.14,
    //                 "apparentTemperatureMaxTime": 1484942400,
    //                 "dewPoint": 33.32,
    //                 "humidity": 0.85,
    //                 "windSpeed": 3.63,
    //                 "windBearing": 331,
    //                 "visibility": 10,
    //                 "cloudCover": 0.64,
    //                 "pressure": 1017.23,
    //                 "ozone": 304.56
    //             },
    //             {
    //                 "time": 1484974800,
    //                 "summary": "Mostly cloudy throughout the day.",
    //                 "icon": "partly-cloudy-day",
    //                 "sunriseTime": 1485000505,
    //                 "sunsetTime": 1485035105,
    //                 "moonPhase": 0.8,
    //                 "precipIntensity": 0,
    //                 "precipIntensityMax": 0,
    //                 "precipProbability": 0,
    //                 "temperatureMin": 32.84,
    //                 "temperatureMinTime": 1485000000,
    //                 "temperatureMax": 54.69,
    //                 "temperatureMaxTime": 1485025200,
    //                 "apparentTemperatureMin": 29.74,
    //                 "apparentTemperatureMinTime": 1485000000,
    //                 "apparentTemperatureMax": 54.69,
    //                 "apparentTemperatureMaxTime": 1485025200,
    //                 "dewPoint": 38.64,
    //                 "humidity": 0.9,
    //                 "windSpeed": 2.95,
    //                 "windBearing": 287,
    //                 "visibility": 10,
    //                 "cloudCover": 0.61,
    //                 "pressure": 1015.34,
    //                 "ozone": 298.82
    //             },
    //             {
    //                 "time": 1485061200,
    //                 "summary": "Mostly cloudy throughout the day.",
    //                 "icon": "partly-cloudy-day",
    //                 "sunriseTime": 1485086863,
    //                 "sunsetTime": 1485121580,
    //                 "moonPhase": 0.83,
    //                 "precipIntensity": 0.0007,
    //                 "precipIntensityMax": 0.0015,
    //                 "precipIntensityMaxTime": 1485144000,
    //                 "precipProbability": 0.03,
    //                 "precipType": "rain",
    //                 "temperatureMin": 37.37,
    //                 "temperatureMinTime": 1485064800,
    //                 "temperatureMax": 47.06,
    //                 "temperatureMaxTime": 1485122400,
    //                 "apparentTemperatureMin": 33.02,
    //                 "apparentTemperatureMinTime": 1485086400,
    //                 "apparentTemperatureMax": 43.71,
    //                 "apparentTemperatureMaxTime": 1485122400,
    //                 "dewPoint": 37.51,
    //                 "humidity": 0.85,
    //                 "windSpeed": 6.29,
    //                 "windBearing": 52,
    //                 "cloudCover": 0.85,
    //                 "pressure": 1019.16,
    //                 "ozone": 314.59
    //             },
    //             {
    //                 "time": 1485147600,
    //                 "summary": "Rain starting in the afternoon.",
    //                 "icon": "rain",
    //                 "sunriseTime": 1485173218,
    //                 "sunsetTime": 1485208056,
    //                 "moonPhase": 0.86,
    //                 "precipIntensity": 0.0065,
    //                 "precipIntensityMax": 0.0296,
    //                 "precipIntensityMaxTime": 1485230400,
    //                 "precipProbability": 0.61,
    //                 "precipType": "rain",
    //                 "temperatureMin": 35.93,
    //                 "temperatureMinTime": 1485169200,
    //                 "temperatureMax": 50,
    //                 "temperatureMaxTime": 1485223200,
    //                 "apparentTemperatureMin": 30,
    //                 "apparentTemperatureMinTime": 1485169200,
    //                 "apparentTemperatureMax": 45.47,
    //                 "apparentTemperatureMaxTime": 1485223200,
    //                 "dewPoint": 39.22,
    //                 "humidity": 0.85,
    //                 "windSpeed": 9.05,
    //                 "windBearing": 95,
    //                 "cloudCover": 1,
    //                 "pressure": 1020.63,
    //                 "ozone": 282.82
    //             },
    //             {
    //                 "time": 1485234000,
    //                 "summary": "Rain throughout the day.",
    //                 "icon": "rain",
    //                 "sunriseTime": 1485259572,
    //                 "sunsetTime": 1485294533,
    //                 "moonPhase": 0.89,
    //                 "precipIntensity": 0.0605,
    //                 "precipIntensityMax": 0.1133,
    //                 "precipIntensityMaxTime": 1485302400,
    //                 "precipProbability": 0.75,
    //                 "precipType": "rain",
    //                 "temperatureMin": 46.22,
    //                 "temperatureMinTime": 1485241200,
    //                 "temperatureMax": 57.78,
    //                 "temperatureMaxTime": 1485295200,
    //                 "apparentTemperatureMin": 40.74,
    //                 "apparentTemperatureMinTime": 1485241200,
    //                 "apparentTemperatureMax": 57.78,
    //                 "apparentTemperatureMaxTime": 1485295200,
    //                 "dewPoint": 52.07,
    //                 "humidity": 0.97,
    //                 "windSpeed": 12.88,
    //                 "windBearing": 110,
    //                 "cloudCover": 1,
    //                 "pressure": 1009.98,
    //                 "ozone": 280.24
    //             },
    //             {
    //                 "time": 1485320400,
    //                 "summary": "Light rain until afternoon, starting again overnight.",
    //                 "icon": "rain",
    //                 "sunriseTime": 1485345924,
    //                 "sunsetTime": 1485381010,
    //                 "moonPhase": 0.92,
    //                 "precipIntensity": 0.0176,
    //                 "precipIntensityMax": 0.0698,
    //                 "precipIntensityMaxTime": 1485320400,
    //                 "precipProbability": 0.71,
    //                 "precipType": "rain",
    //                 "temperatureMin": 46.87,
    //                 "temperatureMinTime": 1485403200,
    //                 "temperatureMax": 55.11,
    //                 "temperatureMaxTime": 1485320400,
    //                 "apparentTemperatureMin": 46.87,
    //                 "apparentTemperatureMinTime": 1485403200,
    //                 "apparentTemperatureMax": 55.11,
    //                 "apparentTemperatureMaxTime": 1485320400,
    //                 "dewPoint": 50.93,
    //                 "humidity": 0.96,
    //                 "windSpeed": 3.44,
    //                 "windBearing": 123,
    //                 "cloudCover": 0.98,
    //                 "pressure": 1010.72,
    //                 "ozone": 296.19
    //             }
    //         ]
    //     },
    //     "alerts": [
    //         {
    //             "title": "Winter Weather Advisory for Middlesex, MA",
    //             "time": 1484686440,
    //             "expires": 1484740800,
    //             "description": "...WINTER WEATHER ADVISORY REMAINS IN EFFECT UNTIL 7 AM EST\nWEDNESDAY...\n* LOCATIONS...INCLUDE WESTERN AND CENTRAL MASSACHUSETTS...\nINCLUDING THE METRO AREAS OF SPRINGFIELD AND WORCESTER ALONG\nWITH GREENFIELD...ORANGE...BARRE...FITCHBURG...AMHERST...\nNORTHAMPTON...MILFORD AND AYER.\n* HAZARD TYPES...INCLUDE SNOW...SLEET...AND FREEZING RAIN.\n* ACCUMULATIONS...1 TO 4 INCHES OF SNOW.\n* TIMING...THIS EVENING INTO EARLY WEDNESDAY.\n* IMPACTS...WINTRY PRECIPITATION WILL LIKELY RESULT IN HAZARDOUS\nTRAVEL CONDITIONS ON UNTREATED ROADS...ESPECIALLY BRIDGES...\nAND OVERPASSES. PARKING LOTS AND SIDEWALKS WILL BECOME\nSLIPPERY AS WELL.\n",
    //             "uri": "https://alerts.weather.gov/cap/wwacapget.php?x=MA125838ABCD98.WinterWeatherAdvisory.125838B9C240MA.BOXWSWBOX.ea9f7e22a5ec6960be2b1c3183c42126"
    //         }
    //     ],
    //     "flags": {
    //         "sources": [
    //             "darksky",
    //             "lamp",
    //             "gfs",
    //             "cmc",
    //             "nam",
    //             "rap",
    //             "sref",
    //             "fnmoc",
    //             "isd",
    //             "nwspa",
    //             "madis",
    //             "nearest-precip"
    //         ],
    //         "darksky-stations": [
    //             "KBOX"
    //         ],
    //         "lamp-stations": [
    //             "KASH",
    //             "KBED",
    //             "KBOS",
    //             "KBVY",
    //             "KFIT",
    //             "KLWM",
    //             "KMQE",
    //             "KOWD",
    //             "KPYM",
    //             "KSFZ",
    //             "KTAN"
    //         ],
    //         "isd-stations": [
    //             "725059-14702",
    //             "725059-99999",
    //             "725088-54733",
    //             "725088-99999",
    //             "725090-14739",
    //             "725097-14790",
    //             "725098-54704",
    //             "725098-99999",
    //             "726054-99999",
    //             "744900-14702",
    //             "744907-14753",
    //             "992420-99999",
    //             "994971-99999",
    //             "999999-14789",
    //             "999999-14790",
    //             "999999-94701"
    //         ],
    //         "madis-stations": [
    //             "A1261",
    //             "AN287",
    //             "AV085",
    //             "BHBM3",
    //             "C0210",
    //             "C6612",
    //             "D0056",
    //             "D3706",
    //             "D7355",
    //             "E2727",
    //             "E4331",
    //             "E5351",
    //             "E5650",
    //             "E6480",
    //             "E8528",
    //             "KBOS"
    //         ],
    //         "units": "us"
    //     }
    // };
    // $scope.weatherData = data;




    console.log('Just kidding, using sample weather data for now because CORS');
    
}]);