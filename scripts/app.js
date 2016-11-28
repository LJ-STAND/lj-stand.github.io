'use strict';

var ljStandApp = angular.module('ljStandApp', [
    'ngRoute',
    'ngSanitize',
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

        .when('/news/:id', {
            templateUrl: 'partials/news_detail.html',
            controller: 'newsDetailCtrl'
        })

        .when('/', {
            redirectTo: '/home'
        })

        // .otherwise({
        //     redirectTo: '/home'
        // });
    }
]);
