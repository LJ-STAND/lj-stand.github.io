"use strict";

var ljApp = angular.module('ljApp', [
    'ngRoute',
    'pagesControllers'
]);

ljApp.config(['$routeProvider',

    function($routeProvider) {
        $routeProvider

        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })

        .when('/news', {
            templateUrl: 'partials/news.html',
            controller: 'NewsCtrl'
        })

        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactCtrl'
        })

        .when('/', {
            redirectTo: '/home'
        })

        .when('/404', {
            templateUrl: 'partials/404.html',
            controller: 'errCtrl'
        })

        .otherwise({
            redirectTo: '/404'
        });
    }]);
