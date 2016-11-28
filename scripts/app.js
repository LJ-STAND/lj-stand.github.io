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

        .when('/robots', {
            templateUrl: 'partials/robots.html',
            controller: 'robotsCtrl'
        })

        .when('/news', {
            templateUrl: 'partials/news.html',
            controller: 'newsCtrl'
        })

        .when('/', {
            redirectTo: '/home'
        })

        .otherwise({
            redirectTo: '/home'
        });
    }]);
