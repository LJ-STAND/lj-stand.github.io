'use strict';

var ljStandApp = angular.module('ljStandApp', [
    'ngRoute',
    'pages'
]);

ljStandApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider

        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

        .when('/', {
            redirectTo: '/home'
        })

        .otherwise({
            redirectTo: '/home'
        });
    }]);
