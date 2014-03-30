/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(['angular'], function (ng) {
  'use strict';

  var mod;

  mod = ng.module('twitter', []);

  mod.factory('twitter.timeline', [
    '$http',
    function ($http) {
      var service, url;
      url = 'http://young-wildwood-4158.herokuapp.com/twitter/timeline/jokeyrhyme';
      service = {
        timeline: []
      };
      $http({
        url: url,
        method: 'GET',
        cache: true,
        responseType: 'json'
      }).success(function (data) {
        if (Array.isArray(data)) {
          service.timeline = data;
        }
      });
      return service;
    }
  ]);

  return mod;
});
