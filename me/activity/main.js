/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(['angular', 'breakdown', 'twitter'], function (ng, Breakdown) {
  'use strict';

  var app;

  app = ng.module('app', ['twitter']);

  app.controller('ActivityCtrl', [
    '$scope', 'twitter.timeline',
    function ($scope, svc) {

      $scope.timeline = svc.timeline;
      $scope.breakdown = new Breakdown();

      $scope.update = function (tweets) {
        var startIndex, unprocessed;
        startIndex = $scope.breakdown.countAllTweets();
        unprocessed = tweets.slice(startIndex);
        tweets.forEach(function (tweet) {
          var period, date;
          date = new Date(Date.parse(tweet.created_at));
          period = $scope.breakdown.findPeriodFor(date);
          if (tweet.retweeted_status) {
            period.retweets = period.retweets || 0;
            period.retweets += 1;
          } else {
            period.tweets = period.tweets || 0;
            period.tweets += 1;
          }
        });
      };

      $scope.$watchCollection('timeline', function (tweets) {
        if (Array.isArray(tweets)) {
          $scope.update(tweets);
        }
      });
    }
  ]);

  ng.bootstrap(document.body, ['app']);

  return app;
});
