/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(['angular', 'breakdown', 'twitter'], function (ng, Breakdown) {
  'use strict';

  var app;

  app = ng.module('app', ['twitter']);

  app.controller('ActivityCtrl', [
    '$scope', 'twitter.timeline',
    function ($scope, svc) {

      $scope.update = function (tweets) {
        $scope.breakdown = new Breakdown();
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

      $scope.$watch(function () {
        return svc.timeline;
      }, function (tweets) {
        if (Array.isArray(tweets)) {
          $scope.update(tweets);
        }
      });
    }
  ]);

  ng.bootstrap(document.body, ['app']);

  return app;
});
