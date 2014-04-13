/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(function () {
  'use strict';

  var Period, Breakdown;

  Period = function (from, to, name) {
    this.name = name;
    this.from = from;
    this.to = to;
    this.tweets = [];
    this.retweets = [];
    this.replies = [];
  };

  Period.prototype.matches = function (date) {
    var ms;
    ms = date.valueOf();
    return this.from.valueOf() <= ms && this.to.valueOf() >= ms;
  };

  Breakdown = function () {
    var to, hour;
    to = new Date();
    this.periods = Breakdown.PERIODS.map(function (days) {
      var from, period;
      from = new Date(to.valueOf() - days * 24 * 60 * 60 * 1000);
      period = new Period(from, to, days + ' days');
      to = from;
      return period;
    });

    this.hoursOfDay = [];
    hour = 24;
    while (hour > 0) {
      hour -= 1;
      this.hoursOfDay.unshift(new Period(null, null, String(hour)));
    }
  };

  Breakdown.PERIODS = [3, 7, 14, 30, 60, 120];

  Breakdown.prototype.findPeriodFor = function (date) {
    var matches;
    matches = this.periods.filter(function (period) {
      return period.matches(date);
    });
    if (matches.length) {
      return matches[0];
    }
    return this.periods[this.periods.length - 1];
  };

  Breakdown.prototype.countAllTweets = function () {
    return this.periods.reduce(function (prev, curr) {
      return prev + curr.retweets.length + curr.replies.length + curr.tweets.length;
    }, 0);
  };

  return Breakdown;
});
