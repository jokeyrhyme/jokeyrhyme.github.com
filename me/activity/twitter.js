/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(['angular'], function (ng) {
  'use strict';

  var mod;

  mod = ng.module('twitter', []);

  mod.factory('twitter.timeline', [
    '$http',
    function ($http) {
      var service, url, fetchTweets;
      url = 'http://young-wildwood-4158.herokuapp.com/twitter/timeline/jokeyrhyme';

      fetchTweets = function () {
        $http({
          url: url,
          method: 'GET',
          cache: true,
          responseType: 'json',
          params: {
            count: 200,
            max_id: service.lowestId
          }
        }).success(function (data) {
          var oldest;
          if (Array.isArray(data) && data.length) {
            service.timeline.push.apply(service.timeline, data);
          }
        });
      };

      service = {
        timeline: [],
        lowestId: ''
      };

      fetchTweets();

      return service;
    }
  ]);

  return mod;
});
