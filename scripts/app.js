'use strict';

var LJSTANDApp = angular.module('LJSTANDApp', []);

LJSTANDApp.controller("NewsController", ['$http', function($http) {
    var news = this;

    news.posts = {};
    $http.get("news.json").success(function(data) {
        news.posts = data;
    });

    news.tab = 'news';
    news.selectTab = function(tab) {
        news.tab = tab;
    }

    news.isSelected = function(tab) {
        return news.tab === tab;
    }
}]);
