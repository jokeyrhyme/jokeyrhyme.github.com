/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(['angular'], function (ng) {
  'use strict';

  var mod;

  mod = ng.module('twitter', []);

  mod.factory('twitter.timeline', [
    '$http',
    function ($http) {
      var service, url, fetchTweets, minTweets;
      url = 'http://young-wildwood-4158.herokuapp.com/twitter/1.1/statuses/user_timeline.json';
      minTweets = 400;

      fetchTweets = function (max_id) {
        var params;
        params = {
          count: minTweets,
          screen_name: 'jokeyrhyme',
          trim_user: true
        };
        if (max_id) {
          params.max_id = max_id;
        }
        $http({
          url: url,
          method: 'GET',
          cache: true,
          responseType: 'json',
          params: params
        }).success(function (data) {
          if (Array.isArray(data) && data.length) {
            if (max_id) {
              data.shift(); // remove tweet we've already parsed before
            }
            service.timeline.push.apply(service.timeline, data);
            if (service.timeline.length < minTweets) {
              fetchTweets(data[data.length - 1].id_str);
            }
          }
        });
      };

      service = {
        timeline: []
      };

      fetchTweets();

      return service;
    }
  ]);

  return mod;
});
