'use strict';

angular.module('DarkSky')
    .directive('navHead', () => ({
    templateUrl: 'components/header/navHeader.html',
    restrict: 'E',
    controller: 'HeaderController',
    controllerAs: 'header'
}));