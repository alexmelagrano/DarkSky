'use strict';

//Main controller file for the Dark Sky-based weather app
angular.module('DarkSky').controller('MainController', ['$scope', 'forecast', 'location', function ($scope, forecast, location) {
    
    console.log('Within main.controller, about to run forecast promise, then parse the location data')

//    forecast.getWeather(function (data) {
//        console.log('Retrieved data from the Dark Sky API');
//        console.log(data);
//        $scope.weatherData = data;
//    });
    
    // something for the location shiz
    var sampleData = {
        "latitude": 42.3601
        , "longitude": -71.0589
        , "timezone": "America/New_York"
        , "offset": -4
        , "currently": {
            "time": 1476903403
            , "summary": "Clear"
            , "icon": "clear-day"
            , "nearestStormDistance": 15
            , "nearestStormBearing": 154
            , "precipIntensity": 0
            , "precipProbability": 0
            , "temperature": 79.27
            , "apparentTemperature": 79.27
            , "dewPoint": 56.04
            , "humidity": 0.45
            , "windSpeed": 6.46
            , "windBearing": 282
            , "visibility": 10
            , "cloudCover": 0.04
            , "pressure": 1014.13
            , "ozone": 278.75
        }
        , "minutely": {
            "summary": "Clear for the hour."
            , "icon": "clear-day"
            , "data": [{
                "time": 1476903360
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903420
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903480
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903540
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903600
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903660
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903720
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903780
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903840
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903900
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476903960
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904020
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904080
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904140
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904200
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904260
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904320
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904380
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904440
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904500
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904560
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904620
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904680
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904740
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904800
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904860
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904920
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476904980
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905040
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905100
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905160
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905220
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905280
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905340
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905400
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905460
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905520
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905580
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905640
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905700
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905760
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905820
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905880
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476905940
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906000
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906060
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906120
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906180
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906240
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906300
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906360
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906420
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906480
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906540
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906600
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906660
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906720
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906780
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906840
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906900
                , "precipIntensity": 0
                , "precipProbability": 0
        }, {
                "time": 1476906960
                , "precipIntensity": 0
                , "precipProbability": 0
        }]
        }
        , "hourly": {
            "summary": "Mostly cloudy starting tonight."
            , "icon": "partly-cloudy-day"
            , "data": [{
                "time": 1476900000
                , "summary": "Clear"
                , "icon": "clear-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 79.08
                , "apparentTemperature": 79.08
                , "dewPoint": 56.89
                , "humidity": 0.47
                , "windSpeed": 6.57
                , "windBearing": 280
                , "visibility": 10
                , "cloudCover": 0.15
                , "pressure": 1013.75
                , "ozone": 278.83
        }, {
                "time": 1476903600
                , "summary": "Clear"
                , "icon": "clear-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 79.28
                , "apparentTemperature": 79.28
                , "dewPoint": 55.99
                , "humidity": 0.45
                , "windSpeed": 6.46
                , "windBearing": 282
                , "visibility": 10
                , "cloudCover": 0.03
                , "pressure": 1014.15
                , "ozone": 278.74
        }, {
                "time": 1476907200
                , "summary": "Clear"
                , "icon": "clear-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 78.57
                , "apparentTemperature": 78.57
                , "dewPoint": 55.9
                , "humidity": 0.46
                , "windSpeed": 7.33
                , "windBearing": 283
                , "visibility": 10
                , "cloudCover": 0.05
                , "pressure": 1014.65
                , "ozone": 278.59
        }, {
                "time": 1476910800
                , "summary": "Clear"
                , "icon": "clear-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 76.48
                , "apparentTemperature": 76.48
                , "dewPoint": 55.27
                , "humidity": 0.48
                , "windSpeed": 7.22
                , "windBearing": 289
                , "visibility": 10
                , "cloudCover": 0.12
                , "pressure": 1015.29
                , "ozone": 278.45
        }, {
                "time": 1476914400
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 73.49
                , "apparentTemperature": 73.49
                , "dewPoint": 54.95
                , "humidity": 0.52
                , "windSpeed": 6.35
                , "windBearing": 298
                , "visibility": 10
                , "cloudCover": 0.15
                , "pressure": 1016.18
                , "ozone": 278.38
        }, {
                "time": 1476918000
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 70.37
                , "apparentTemperature": 70.37
                , "dewPoint": 54.72
                , "humidity": 0.58
                , "windSpeed": 5.66
                , "windBearing": 311
                , "visibility": 10
                , "cloudCover": 0.18
                , "pressure": 1017.21
                , "ozone": 278.32
        }, {
                "time": 1476921600
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 66.94
                , "apparentTemperature": 66.94
                , "dewPoint": 53.86
                , "humidity": 0.63
                , "windSpeed": 5.64
                , "windBearing": 328
                , "visibility": 9.98
                , "cloudCover": 0.22
                , "pressure": 1018.16
                , "ozone": 278.24
        }, {
                "time": 1476925200
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 65.4
                , "apparentTemperature": 65.4
                , "dewPoint": 54.34
                , "humidity": 0.67
                , "windSpeed": 5.47
                , "windBearing": 334
                , "visibility": 9.82
                , "cloudCover": 0.1
                , "pressure": 1018.93
                , "ozone": 278.13
        }, {
                "time": 1476928800
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 63.82
                , "apparentTemperature": 63.82
                , "dewPoint": 54.09
                , "humidity": 0.71
                , "windSpeed": 5.08
                , "windBearing": 345
                , "visibility": 9.56
                , "cloudCover": 0.03
                , "pressure": 1019.64
                , "ozone": 278.01
        }, {
                "time": 1476932400
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 62.24
                , "apparentTemperature": 62.24
                , "dewPoint": 53.77
                , "humidity": 0.74
                , "windSpeed": 5
                , "windBearing": 358
                , "visibility": 9.38
                , "cloudCover": 0.12
                , "pressure": 1020.27
                , "ozone": 277.79
        }, {
                "time": 1476936000
                , "summary": "Clear"
                , "icon": "clear-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 60.47
                , "apparentTemperature": 60.47
                , "dewPoint": 53.17
                , "humidity": 0.77
                , "windSpeed": 5.15
                , "windBearing": 7
                , "visibility": 9.16
                , "cloudCover": 0.14
                , "pressure": 1020.79
                , "ozone": 277.37
        }, {
                "time": 1476939600
                , "summary": "Partly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 59.21
                , "apparentTemperature": 59.21
                , "dewPoint": 52.73
                , "humidity": 0.79
                , "windSpeed": 5.42
                , "windBearing": 17
                , "visibility": 9
                , "cloudCover": 0.27
                , "pressure": 1021.22
                , "ozone": 276.86
        }, {
                "time": 1476943200
                , "summary": "Partly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 58.46
                , "apparentTemperature": 58.46
                , "dewPoint": 52.52
                , "humidity": 0.81
                , "windSpeed": 5.35
                , "windBearing": 27
                , "visibility": 8.94
                , "cloudCover": 0.3
                , "pressure": 1021.56
                , "ozone": 276.51
        }, {
                "time": 1476946800
                , "summary": "Partly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 57.74
                , "apparentTemperature": 57.74
                , "dewPoint": 52.19
                , "humidity": 0.82
                , "windSpeed": 5.8
                , "windBearing": 31
                , "visibility": 8.95
                , "cloudCover": 0.49
                , "pressure": 1021.81
                , "ozone": 276.46
        }, {
                "time": 1476950400
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 56.86
                , "apparentTemperature": 56.86
                , "dewPoint": 51.69
                , "humidity": 0.83
                , "windSpeed": 6.52
                , "windBearing": 34
                , "visibility": 8.94
                , "cloudCover": 0.63
                , "pressure": 1022.01
                , "ozone": 276.56
        }, {
                "time": 1476954000
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 55.6
                , "apparentTemperature": 55.6
                , "dewPoint": 50.68
                , "humidity": 0.83
                , "windSpeed": 6.97
                , "windBearing": 40
                , "visibility": 8.94
                , "cloudCover": 0.68
                , "pressure": 1022.24
                , "ozone": 276.64
        }, {
                "time": 1476957600
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 53.89
                , "apparentTemperature": 53.89
                , "dewPoint": 48.95
                , "humidity": 0.83
                , "windSpeed": 7.43
                , "windBearing": 41
                , "visibility": 9
                , "cloudCover": 0.72
                , "pressure": 1022.58
                , "ozone": 276.65
        }, {
                "time": 1476961200
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-night"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 53.07
                , "apparentTemperature": 53.07
                , "dewPoint": 47.82
                , "humidity": 0.82
                , "windSpeed": 8.19
                , "windBearing": 44
                , "visibility": 9.05
                , "cloudCover": 0.72
                , "pressure": 1022.96
                , "ozone": 276.64
        }, {
                "time": 1476964800
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 54.54
                , "apparentTemperature": 54.54
                , "dewPoint": 48.61
                , "humidity": 0.8
                , "windSpeed": 8.87
                , "windBearing": 46
                , "visibility": 9.42
                , "cloudCover": 0.72
                , "pressure": 1023.27
                , "ozone": 276.57
        }, {
                "time": 1476968400
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 57.03
                , "apparentTemperature": 57.03
                , "dewPoint": 49.61
                , "humidity": 0.76
                , "windSpeed": 9.19
                , "windBearing": 54
                , "visibility": 9.68
                , "cloudCover": 0.73
                , "pressure": 1023.53
                , "ozone": 276.5
        }, {
                "time": 1476972000
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 58.91
                , "apparentTemperature": 58.91
                , "dewPoint": 49.88
                , "humidity": 0.72
                , "windSpeed": 9.93
                , "windBearing": 64
                , "visibility": 9.83
                , "cloudCover": 0.72
                , "pressure": 1023.75
                , "ozone": 276.37
        }, {
                "time": 1476975600
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 60.42
                , "apparentTemperature": 60.42
                , "dewPoint": 49.79
                , "humidity": 0.68
                , "windSpeed": 11.05
                , "windBearing": 66
                , "visibility": 9.91
                , "cloudCover": 0.71
                , "pressure": 1023.84
                , "ozone": 276.04
        }, {
                "time": 1476979200
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 61.2
                , "apparentTemperature": 61.2
                , "dewPoint": 50.24
                , "humidity": 0.67
                , "windSpeed": 11.19
                , "windBearing": 73
                , "visibility": 10
                , "cloudCover": 0.72
                , "pressure": 1023.7
                , "ozone": 275.29
        }, {
                "time": 1476982800
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 61.97
                , "apparentTemperature": 61.97
                , "dewPoint": 51.18
                , "humidity": 0.68
                , "windSpeed": 11.19
                , "windBearing": 73
                , "visibility": 10
                , "cloudCover": 0.73
                , "pressure": 1023.37
                , "ozone": 274.33
        }, {
                "time": 1476986400
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 61.34
                , "apparentTemperature": 61.34
                , "dewPoint": 51.13
                , "humidity": 0.69
                , "windSpeed": 11.55
                , "windBearing": 74
                , "visibility": 9.8
                , "cloudCover": 0.75
                , "pressure": 1022.9
                , "ozone": 273.64
        }, {
                "time": 1476990000
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 60.91
                , "apparentTemperature": 60.91
                , "dewPoint": 51.39
                , "humidity": 0.71
                , "windSpeed": 11.63
                , "windBearing": 74
                , "visibility": 9.85
                , "cloudCover": 0.77
                , "pressure": 1022.24
                , "ozone": 273.47
        }, {
                "time": 1476993600
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 60.33
                , "apparentTemperature": 60.33
                , "dewPoint": 52.17
                , "humidity": 0.74
                , "windSpeed": 11.88
                , "windBearing": 74
                , "visibility": 9.9
                , "cloudCover": 0.88
                , "pressure": 1021.45
                , "ozone": 273.56
        }, {
                "time": 1476997200
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 59.88
                , "apparentTemperature": 59.88
                , "dewPoint": 53.15
                , "humidity": 0.78
                , "windSpeed": 12.04
                , "windBearing": 75
                , "visibility": 9.94
                , "cloudCover": 0.98
                , "pressure": 1020.81
                , "ozone": 273.58
        }, {
                "time": 1477000800
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0028
                , "precipProbability": 0.09
                , "precipType": "rain"
                , "temperature": 59.79
                , "apparentTemperature": 59.79
                , "dewPoint": 54.26
                , "humidity": 0.82
                , "windSpeed": 12.19
                , "windBearing": 77
                , "visibility": 9.96
                , "cloudCover": 1
                , "pressure": 1020.45
                , "ozone": 273.52
        }, {
                "time": 1477004400
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.0064
                , "precipProbability": 0.29
                , "precipType": "rain"
                , "temperature": 59.77
                , "apparentTemperature": 59.77
                , "dewPoint": 55.42
                , "humidity": 0.86
                , "windSpeed": 12.11
                , "windBearing": 80
                , "visibility": 10
                , "cloudCover": 0.96
                , "pressure": 1020.23
                , "ozone": 273.39
        }, {
                "time": 1477008000
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.0086
                , "precipProbability": 0.42
                , "precipType": "rain"
                , "temperature": 59.6
                , "apparentTemperature": 59.6
                , "dewPoint": 56.08
                , "humidity": 0.88
                , "windSpeed": 12.04
                , "windBearing": 83
                , "visibility": 10
                , "cloudCover": 0.93
                , "pressure": 1019.83
                , "ozone": 272.85
        }, {
                "time": 1477011600
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.008
                , "precipProbability": 0.39
                , "precipType": "rain"
                , "temperature": 59.14
                , "apparentTemperature": 59.14
                , "dewPoint": 56.22
                , "humidity": 0.9
                , "windSpeed": 11.77
                , "windBearing": 86
                , "visibility": 10
                , "cloudCover": 0.95
                , "pressure": 1019.22
                , "ozone": 271.74
        }, {
                "time": 1477015200
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.006
                , "precipProbability": 0.26
                , "precipType": "rain"
                , "temperature": 58.46
                , "apparentTemperature": 58.46
                , "dewPoint": 56.02
                , "humidity": 0.92
                , "windSpeed": 11.32
                , "windBearing": 91
                , "visibility": 10
                , "cloudCover": 0.97
                , "pressure": 1018.5
                , "ozone": 270.24
        }, {
                "time": 1477018800
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0043
                , "precipProbability": 0.16
                , "precipType": "rain"
                , "temperature": 57.8
                , "apparentTemperature": 57.8
                , "dewPoint": 55.81
                , "humidity": 0.93
                , "windSpeed": 10.73
                , "windBearing": 98
                , "visibility": 10
                , "cloudCover": 0.99
                , "pressure": 1017.64
                , "ozone": 268.51
        }, {
                "time": 1477022400
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0037
                , "precipProbability": 0.13
                , "precipType": "rain"
                , "temperature": 57.49
                , "apparentTemperature": 57.49
                , "dewPoint": 55.94
                , "humidity": 0.95
                , "windSpeed": 9.88
                , "windBearing": 107
                , "visibility": 10
                , "cloudCover": 1
                , "pressure": 1016.67
                , "ozone": 266.5
        }, {
                "time": 1477026000
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0034
                , "precipProbability": 0.12
                , "precipType": "rain"
                , "temperature": 58.2
                , "apparentTemperature": 58.2
                , "dewPoint": 57.05
                , "humidity": 0.96
                , "windSpeed": 8.87
                , "windBearing": 115
                , "visibility": 10
                , "cloudCover": 0.99
                , "pressure": 1015.63
                , "ozone": 264.27
        }, {
                "time": 1477029600
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.003
                , "precipProbability": 0.1
                , "precipType": "rain"
                , "temperature": 59.2
                , "apparentTemperature": 59.2
                , "dewPoint": 58.34
                , "humidity": 0.97
                , "windSpeed": 8.09
                , "windBearing": 122
                , "visibility": 10
                , "cloudCover": 0.99
                , "pressure": 1014.66
                , "ozone": 262.22
        }, {
                "time": 1477033200
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0022
                , "precipProbability": 0.06
                , "precipType": "rain"
                , "temperature": 60.44
                , "apparentTemperature": 60.44
                , "dewPoint": 59.71
                , "humidity": 0.97
                , "windSpeed": 7.62
                , "windBearing": 129
                , "visibility": 7.03
                , "cloudCover": 0.99
                , "pressure": 1013.83
                , "ozone": 260.48
        }, {
                "time": 1477036800
                , "summary": "Overcast"
                , "icon": "cloudy"
                , "precipIntensity": 0.0014
                , "precipProbability": 0.03
                , "precipType": "rain"
                , "temperature": 61.7
                , "apparentTemperature": 61.7
                , "dewPoint": 61
                , "humidity": 0.98
                , "windSpeed": 7.24
                , "windBearing": 135
                , "visibility": 2.96
                , "cloudCover": 1
                , "pressure": 1013.08
                , "ozone": 258.92
        }, {
                "time": 1477040400
                , "summary": "Foggy"
                , "icon": "fog"
                , "precipIntensity": 0.0008
                , "precipProbability": 0.01
                , "precipType": "rain"
                , "temperature": 62.67
                , "apparentTemperature": 62.67
                , "dewPoint": 61.96
                , "humidity": 0.98
                , "windSpeed": 7.04
                , "windBearing": 140
                , "visibility": 0
                , "cloudCover": 1
                , "pressure": 1012.38
                , "ozone": 257.46
        }, {
                "time": 1477044000
                , "summary": "Foggy"
                , "icon": "fog"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 63.16
                , "apparentTemperature": 63.16
                , "dewPoint": 62.45
                , "humidity": 0.98
                , "windSpeed": 6.94
                , "windBearing": 140
                , "visibility": 0
                , "cloudCover": 1
                , "pressure": 1011.75
                , "ozone": 256.16
        }, {
                "time": 1477047600
                , "summary": "Foggy"
                , "icon": "fog"
                , "precipIntensity": 0
                , "precipProbability": 0
                , "temperature": 63.43
                , "apparentTemperature": 63.43
                , "dewPoint": 62.66
                , "humidity": 0.97
                , "windSpeed": 6.94
                , "windBearing": 138
                , "visibility": 0
                , "cloudCover": 1
                , "pressure": 1011.17
                , "ozone": 254.97
        }, {
                "time": 1477051200
                , "summary": "Foggy"
                , "icon": "fog"
                , "precipIntensity": 0.0011
                , "precipProbability": 0.02
                , "precipType": "rain"
                , "temperature": 63.91
                , "apparentTemperature": 63.91
                , "dewPoint": 62.86
                , "humidity": 0.96
                , "windSpeed": 7.08
                , "windBearing": 135
                , "visibility": 0.08
                , "cloudCover": 0.99
                , "pressure": 1010.62
                , "ozone": 253.65
        }, {
                "time": 1477054800
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0.0016
                , "precipProbability": 0.03
                , "precipType": "rain"
                , "temperature": 64.94
                , "apparentTemperature": 64.94
                , "dewPoint": 63.25
                , "humidity": 0.94
                , "windSpeed": 7.28
                , "windBearing": 131
                , "visibility": 2.43
                , "cloudCover": 0.93
                , "pressure": 1010.14
                , "ozone": 252.01
        }, {
                "time": 1477058400
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0.0024
                , "precipProbability": 0.07
                , "precipType": "rain"
                , "temperature": 66.35
                , "apparentTemperature": 66.35
                , "dewPoint": 63.76
                , "humidity": 0.91
                , "windSpeed": 7.61
                , "windBearing": 128
                , "visibility": 5.67
                , "cloudCover": 0.84
                , "pressure": 1009.67
                , "ozone": 250.24
        }, {
                "time": 1477062000
                , "summary": "Mostly Cloudy"
                , "icon": "partly-cloudy-day"
                , "precipIntensity": 0.0034
                , "precipProbability": 0.12
                , "precipType": "rain"
                , "temperature": 67.76
                , "apparentTemperature": 67.76
                , "dewPoint": 64.27
                , "humidity": 0.89
                , "windSpeed": 7.97
                , "windBearing": 127
                , "visibility": 8.06
                , "cloudCover": 0.76
                , "pressure": 1009.03
                , "ozone": 248.64
        }, {
                "time": 1477065600
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.005
                , "precipProbability": 0.2
                , "precipType": "rain"
                , "temperature": 69.1
                , "apparentTemperature": 69.1
                , "dewPoint": 64.71
                , "humidity": 0.86
                , "windSpeed": 8.22
                , "windBearing": 130
                , "visibility": 8.74
                , "cloudCover": 0.71
                , "pressure": 1008.07
                , "ozone": 247.29
        }, {
                "time": 1477069200
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.0068
                , "precipProbability": 0.31
                , "precipType": "rain"
                , "temperature": 70.33
                , "apparentTemperature": 70.33
                , "dewPoint": 65.06
                , "humidity": 0.83
                , "windSpeed": 8.41
                , "windBearing": 135
                , "visibility": 8.58
                , "cloudCover": 0.66
                , "pressure": 1006.94
                , "ozone": 246.1
        }, {
                "time": 1477072800
                , "summary": "Drizzle"
                , "icon": "rain"
                , "precipIntensity": 0.0079
                , "precipProbability": 0.38
                , "precipType": "rain"
                , "temperature": 71.08
                , "apparentTemperature": 71.08
                , "dewPoint": 65.35
                , "humidity": 0.82
                , "windSpeed": 8.59
                , "windBearing": 135
                , "visibility": 8.38
                , "cloudCover": 0.63
                , "pressure": 1005.83
                , "ozone": 245.18
        }]
        }
        , "daily": {
            "summary": "Light rain tomorrow through Monday, with temperatures falling to 51°F on Wednesday."
            , "icon": "rain"
            , "data": [{
                "time": 1476849600
                , "summary": "Partly cloudy overnight."
                , "icon": "partly-cloudy-night"
                , "sunriseTime": 1476875004
                , "sunsetTime": 1476914225
                , "moonPhase": 0.63
                , "precipIntensity": 0.0002
                , "precipIntensityMax": 0.0026
                , "precipIntensityMaxTime": 1476882000
                , "precipProbability": 0.08
                , "precipType": "rain"
                , "temperatureMin": 62.24
                , "temperatureMinTime": 1476932400
                , "temperatureMax": 79.28
                , "temperatureMaxTime": 1476903600
                , "apparentTemperatureMin": 62.24
                , "apparentTemperatureMinTime": 1476932400
                , "apparentTemperatureMax": 79.28
                , "apparentTemperatureMaxTime": 1476903600
                , "dewPoint": 59.42
                , "humidity": 0.71
                , "windSpeed": 4.48
                , "windBearing": 251
                , "visibility": 9.75
                , "cloudCover": 0.15
                , "pressure": 1013.38
                , "ozone": 278.62
        }, {
                "time": 1476936000
                , "summary": "Drizzle starting in the evening."
                , "icon": "rain"
                , "sunriseTime": 1476961475
                , "sunsetTime": 1477000533
                , "moonPhase": 0.67
                , "precipIntensity": 0.0015
                , "precipIntensityMax": 0.0086
                , "precipIntensityMaxTime": 1477008000
                , "precipProbability": 0.42
                , "precipType": "rain"
                , "temperatureMin": 53.07
                , "temperatureMinTime": 1476961200
                , "temperatureMax": 61.97
                , "temperatureMaxTime": 1476982800
                , "apparentTemperatureMin": 53.07
                , "apparentTemperatureMinTime": 1476961200
                , "apparentTemperatureMax": 61.97
                , "apparentTemperatureMaxTime": 1476982800
                , "dewPoint": 52.11
                , "humidity": 0.79
                , "windSpeed": 8.91
                , "windBearing": 66
                , "visibility": 9.6
                , "cloudCover": 0.73
                , "pressure": 1021.66
                , "ozone": 274.72
        }, {
                "time": 1477022400
                , "summary": "Light rain starting in the afternoon."
                , "icon": "rain"
                , "sunriseTime": 1477047947
                , "sunsetTime": 1477086843
                , "moonPhase": 0.7
                , "precipIntensity": 0.0041
                , "precipIntensityMax": 0.0099
                , "precipIntensityMaxTime": 1477105200
                , "precipProbability": 0.47
                , "precipType": "rain"
                , "temperatureMin": 57.49
                , "temperatureMinTime": 1477022400
                , "temperatureMax": 71.08
                , "temperatureMaxTime": 1477072800
                , "apparentTemperatureMin": 57.49
                , "apparentTemperatureMinTime": 1477022400
                , "apparentTemperatureMax": 71.08
                , "apparentTemperatureMaxTime": 1477072800
                , "dewPoint": 63.03
                , "humidity": 0.93
                , "windSpeed": 7.3
                , "windBearing": 120
                , "visibility": 4.95
                , "cloudCover": 0.88
                , "pressure": 1007.55
                , "ozone": 250.55
        }, {
                "time": 1477108800
                , "summary": "Light rain until afternoon."
                , "icon": "rain"
                , "sunriseTime": 1477134420
                , "sunsetTime": 1477173153
                , "moonPhase": 0.74
                , "precipIntensity": 0.011
                , "precipIntensityMax": 0.0257
                , "precipIntensityMaxTime": 1477137600
                , "precipProbability": 0.59
                , "precipType": "rain"
                , "temperatureMin": 45.88
                , "temperatureMinTime": 1477188000
                , "temperatureMax": 67.55
                , "temperatureMaxTime": 1477108800
                , "apparentTemperatureMin": 39.62
                , "apparentTemperatureMinTime": 1477188000
                , "apparentTemperatureMax": 67.55
                , "apparentTemperatureMaxTime": 1477108800
                , "dewPoint": 51.02
                , "humidity": 0.84
                , "windSpeed": 8.21
                , "windBearing": 276
                , "visibility": 6.19
                , "cloudCover": 0.76
                , "pressure": 995.37
                , "ozone": 272.93
        }, {
                "time": 1477195200
                , "summary": "Drizzle in the morning."
                , "icon": "rain"
                , "sunriseTime": 1477220892
                , "sunsetTime": 1477259465
                , "moonPhase": 0.78
                , "precipIntensity": 0.0016
                , "precipIntensityMax": 0.0051
                , "precipIntensityMaxTime": 1477220400
                , "precipProbability": 0.21
                , "precipType": "rain"
                , "temperatureMin": 40.42
                , "temperatureMinTime": 1477224000
                , "temperatureMax": 52.88
                , "temperatureMaxTime": 1477252800
                , "apparentTemperatureMin": 32.89
                , "apparentTemperatureMinTime": 1477224000
                , "apparentTemperatureMax": 52.88
                , "apparentTemperatureMaxTime": 1477252800
                , "dewPoint": 33.41
                , "humidity": 0.6
                , "windSpeed": 13.18
                , "windBearing": 279
                , "cloudCover": 0.51
                , "pressure": 1005.58
                , "ozone": 289.49
        }, {
                "time": 1477281600
                , "summary": "Light rain in the afternoon."
                , "icon": "rain"
                , "sunriseTime": 1477307365
                , "sunsetTime": 1477345778
                , "moonPhase": 0.81
                , "precipIntensity": 0.0053
                , "precipIntensityMax": 0.0396
                , "precipIntensityMaxTime": 1477332000
                , "precipProbability": 0.64
                , "precipType": "rain"
                , "temperatureMin": 44.54
                , "temperatureMinTime": 1477364400
                , "temperatureMax": 58.29
                , "temperatureMaxTime": 1477321200
                , "apparentTemperatureMin": 39.01
                , "apparentTemperatureMinTime": 1477364400
                , "apparentTemperatureMax": 58.29
                , "apparentTemperatureMaxTime": 1477321200
                , "dewPoint": 41.44
                , "humidity": 0.73
                , "windSpeed": 6.86
                , "windBearing": 287
                , "cloudCover": 0.26
                , "pressure": 1013.31
                , "ozone": 287.28
        }, {
                "time": 1477368000
                , "summary": "Partly cloudy starting in the afternoon, continuing until evening."
                , "icon": "partly-cloudy-night"
                , "sunriseTime": 1477393839
                , "sunsetTime": 1477432092
                , "moonPhase": 0.84
                , "precipIntensity": 0
                , "precipIntensityMax": 0
                , "precipProbability": 0
                , "temperatureMin": 39.6
                , "temperatureMinTime": 1477396800
                , "temperatureMax": 52.39
                , "temperatureMaxTime": 1477422000
                , "apparentTemperatureMin": 32.6
                , "apparentTemperatureMinTime": 1477396800
                , "apparentTemperatureMax": 52.39
                , "apparentTemperatureMaxTime": 1477422000
                , "dewPoint": 32.48
                , "humidity": 0.61
                , "windSpeed": 9.15
                , "windBearing": 325
                , "cloudCover": 0.12
                , "pressure": 1023.97
                , "ozone": 303.26
        }, {
                "time": 1477454400
                , "summary": "Mostly cloudy throughout the day."
                , "icon": "partly-cloudy-day"
                , "sunriseTime": 1477480312
                , "sunsetTime": 1477518407
                , "moonPhase": 0.88
                , "precipIntensity": 0.0005
                , "precipIntensityMax": 0.001
                , "precipIntensityMaxTime": 1477537200
                , "precipProbability": 0.01
                , "precipType": "rain"
                , "temperatureMin": 40.06
                , "temperatureMinTime": 1477479600
                , "temperatureMax": 51.17
                , "temperatureMaxTime": 1477508400
                , "apparentTemperatureMin": 35.97
                , "apparentTemperatureMinTime": 1477479600
                , "apparentTemperatureMax": 51.17
                , "apparentTemperatureMaxTime": 1477508400
                , "dewPoint": 36.67
                , "humidity": 0.71
                , "windSpeed": 2.8
                , "windBearing": 27
                , "cloudCover": 0.58
                , "pressure": 1030.58
                , "ozone": 280.81
        }]
        }
        , "alerts": [{
            "title": "Coastal Flood Statement for Suffolk, MA"
            , "time": 1476888480
            , "expires": 1476907200
            , "description": "...ISOLATED SPLASHOVER POSSIBLE ALONG THE MASSACHUSETTS EAST COAST\nTHIS AFTERNOON...\n* LOCATION...EAST COASTAL MASSACHUSETTS FROM PLYMOUTH TO THE NEW\nHAMPSHIRE BORDER.\n* COASTAL FLOODING...RESIDUAL HIGH ASTRONOMICAL TIDE COMBINED WITH\nA TIDAL DEPARTURE OF UP TO 0.5 FEET MAY CAUSE ISOLATED\nSPLASHOVER ALONG THE MOST VULNERABLE SHORE ROADS.\n* TIMING...NOON TO 4 PM.\n* IMPACTS...LEFTOVER TRAPPED WATER ON VULNERABLE SHORE ROADS\nSHOULD DRAIN BY MID-LATE AFTERNOON.\n&&\nALL TIDE HEIGHTS ARE RELATIVE TO MEAN LOWER LOW WATER.\nTIME OF HIGH TOTAL TIDES ARE APPROXIMATE TO THE NEAREST HOUR.\nNEWBURYPORT\nTOTAL\nTIDE      DAY/TIME     SURGE     WAVES      FLOOD\n/FT/                    /FT/      /FT/    CATEGORY\n-----------  ----------  ---------  -------  ----------\n10.0-10.5    19/02 PM   -0.2/ 0.2     2        NONE\n8.8- 9.3    20/03 AM   -0.2/ 0.2     2        NONE\n10.0-10.5    20/03 PM    0.1/ 0.6     3        NONE\n8.8- 9.3    21/04 AM    0.1/ 0.6     3        NONE\n10.3-10.8    21/04 PM    0.7/ 1.1     3        NONE\nGLOUCESTER HARBOR\nTOTAL\nTIDE      DAY/TIME     SURGE     WAVES      FLOOD\n/FT/                    /FT/      /FT/    CATEGORY\n-----------  ----------  ---------  -------  ----------\n11.4-11.9    19/02 PM   -0.2/ 0.2    2-3       NONE\n10.1-10.6    20/03 AM   -0.2/ 0.2     2        NONE\n11.4-11.9    20/03 PM    0.1/ 0.6     3        NONE\n10.2-10.7    21/04 AM    0.2/ 0.8     3        NONE\n11.7-12.2    21/04 PM    0.9/ 1.4    3-4       NONE\nREVERE\nTOTAL\nTIDE      DAY/TIME     SURGE     WAVES      FLOOD\n/FT/                    /FT/      /FT/    CATEGORY\n-----------  ----------  ---------  -------  ----------\n11.8-12.3    19/02 PM   -0.2/ 0.2     2        NONE\n10.5-11.0    20/03 AM   -0.2/ 0.2     1        NONE\n11.7-12.2    20/03 PM    0.1/ 0.6     3        NONE\n10.7-11.2    21/04 AM    0.5/ 1.0    2-3       NONE\n12.1-12.6    21/04 PM    1.0/ 1.5    2-3       NONE\nBOSTON HARBOR\nTOTAL\nTIDE      DAY/TIME     SURGE     WAVES      FLOOD\n/FT/                    /FT/      /FT/    CATEGORY\n-----------  ----------  ---------  -------  ----------\n11.9-12.4    19/02 PM   -0.2/ 0.2     1        NONE\n10.6-11.1    20/03 AM   -0.2/ 0.2     1        NONE\n11.5-12.0    20/03 PM   -0.2/ 0.2    1-2       NONE\n10.4-10.9    21/04 AM    0.1/ 0.6     1        NONE\n11.9-12.4    21/04 PM    0.8/ 1.3     1        NONE\nSCITUATE\nTOTAL\nTIDE      DAY/TIME     SURGE     WAVES      FLOOD\n/FT/                    /FT/      /FT/    CATEGORY\n-----------  ----------  ---------  -------  ----------\n11.2-11.7    19/02 PM   -0.2/ 0.2    2-3       NONE\n10.0-10.5    20/03 AM   -0.2/ 0.2     2        NONE\n11.2-11.7    20/03 PM    0.1/ 0.6     3        NONE\n10.1-10.6    21/04 AM    0.2/ 0.8     3        NONE\n11.6-12.1    21/04 PM    0.9/ 1.4     3       MINOR\n"
            , "uri": "https://alerts.weather.gov/cap/wwacapget.php?x=MA12561A626A60.CoastalFloodStatement.12561A634200MA.BOXCFWBOX.d97a5568d0955ba5fdbe90165eec265a"
    }]
        , "flags": {
            "sources": ["darksky", "lamp", "gfs", "cmc", "nam", "rap", "rtma", "sref", "fnmoc", "isd", "nwspa", "madis", "nearest-precip"]
            , "darksky-stations": ["KBOX"]
            , "lamp-stations": ["KASH", "KBED", "KBOS", "KBVY", "KFIT", "KLWM", "KMQE", "KOWD", "KPYM", "KSFZ", "KTAN"]
            , "isd-stations": ["725090-14739", "726054-99999", "994971-99999", "999999-14789", "999999-94701"]
            , "madis-stations": ["AV085", "BHBM3", "C0210", "C6612", "D0056", "D3706", "D7355", "D8100", "E0152", "E3565", "E4331", "E5351", "E5650", "E6033", "E6480", "KBOS"]
            , "units": "us"
        }
    };
    $scope.weatherData = sampleData;
    
    // TODO :: use Google's Geocoding API to do an address lookup
    var latLong = {
        lat: sampleData.latitude
        , long: sampleData.longitude
    };
    
    console.log('Looking for the location at this latitude:' + sampleData.latitude);
        console.log('Looking for the location at this longitude:' + sampleData.longitude);
    
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
    
    console.log('Just kidding, using sample weather data for now because CORS');
    
}]);