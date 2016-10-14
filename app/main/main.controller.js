'use strict';

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    console.log('Within main.controller, about to run forecast promise')
    forecast.success(function(data) {
        console.log('Ran promise; storing output in $scope.weatherData')
        $scope.weatherData = data;
    });
}]);