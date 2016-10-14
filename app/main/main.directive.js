'use strict';

angular.module('DarkSky')
    .directive('app-info', () => ({
    templateUrl: 'app/main/main.html',
    restrict: 'E',
    controller: 'MainController',
    controllerAs: 'main'
}));