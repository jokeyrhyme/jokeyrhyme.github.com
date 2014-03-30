/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define(function () {
  'use strict';

  var Period, Breakdown;

  Period = function (from, to, name) {
    this.name = name;
    this.from = from;
    this.to = to;
  };

  Period.prototype.matches = function (date) {
    var ms;
    ms = date.valueOf();
    return this.from.valueOf() <= ms && this.to.valueOf() >= ms;
  };

  Breakdown = function () {
    var to;
    to = new Date();
    this.periods = Breakdown.PERIODS.map(function (days) {
      var from, period;
      from = new Date(to.valueOf() - days * 24 * 60 * 60 * 1000);
      period = new Period(from, to, days + ' days');
      to = from;
      return period;
    });

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

  return Breakdown;
});
