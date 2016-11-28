'use strict';

var pages = angular.module('pages', []);

pages.controller('homeCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {}
]);

pages.controller('newsCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('/news.json').success(function(data) {
            $scope.news = data;
        });
    }
]);

pages.controller('newsDetailCtrl', ['$scope', '$http', '$routeParams', '$sce',
    function($scope, $http, $routeParams, $sce) {
        var url = '/news.json';
        $http.get(url).success(function(data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (item.id == $routeParams.id) {
                    $scope.item = item;
                }
            }
        });


        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }
]);
