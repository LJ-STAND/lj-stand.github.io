"use strict";

var pagesControllers = angular.module('pagesControllers', []);

pagesControllers

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {}])

.controller('NewsCtrl', ['$scope', '$http', function($scope, $http) {
    var posts = [
        {
            title: "test post 2",
            message: "msg 2"
        },
        {
            title: "test 1",
            message: "test msg"
        }
    ];

    $scope.posts = posts;
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {}])

.controller('errCtrl', ['$scope', '$http', function($scope, $http) {}])

;
