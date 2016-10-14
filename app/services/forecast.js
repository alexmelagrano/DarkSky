// Calls the Dark Sky API, returns the resulting JSON
app.factory('forecast', ['$http', function($http) {
    console.log('Began the API call');
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json)                     
//                   https://api.darksky.net/forecast/d3d9f650d94a2fc4384cdfb3bfa3453d/37.8267,-122.4233')
    .success(function(data) {
        return data;
        console.log("Returned the Dark Sky data");
    })
    .error(function(err) {
        return err;
        console.log('Something fucked up in the API call...');
    });
}]);