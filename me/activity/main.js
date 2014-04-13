/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

define([
  'angular', 'modernizr', 'chart', 'twitter'
], function (ng, Modernizr, Chart) {
  'use strict';

  var app;

  app = ng.module('app', ['twitter']);

  app.controller('ActivityCtrl', [
    '$scope', 'twitter.timeline', 'twitter.breakdown',
    function ($scope, svc, breakdown) {

      $scope.timeline = svc.timeline;
      $scope.breakdown = breakdown;

      $scope.selectedPeriod = null;

      $scope.selectPeriod = function (period) {
        $scope.selectedPeriod = period;
      };

    }
  ]);

  app.directive('chart', [
    function () {
      var colors;
      colors = {
        tweets: 'rgb(0, 150, 250)',
        replies: 'rgb(0, 150, 150)',
        retweets: 'rgb(0, 150, 0)'
      };

      return {
        replace: false,
        scope: {
          categories: '=',
          periods: '=chart',
          timeline: '=timeline'
        },
        link: function ($scope, el$) { // ($scope, el$, attrs) {
          var chart, data, updateChart;

          if (!Modernizr.canvas) {
            el$.after('<p>Error: your browser is not compatible with this chart.</p>');
            return; // exit early, nothing can be done
          }

          chart = new Chart(el$[0].getContext('2d'));

          updateChart = function () {
            data = {
              labels: [],
              datasets: []
            };
            if (!$scope.categories.length) {
              return; // nothing to do, no categories selected
            }
            $scope.periods.forEach(function (period) {
              data.labels.push(period.name);
              $scope.categories.forEach(function (category, index) {
                data.datasets[index] = data.datasets[index] || {
                  fillColor: 'transparent',
                  strokeColor: colors[category],
                  pointColor: colors[category],
                  pointStrokeColor: '#fff',
                  data: []
                };
                data.datasets[index].data.push(period[category].length);
              });
            });
            chart.Radar(data, {});
          };

          $scope.$watchCollection('timeline', updateChart);
          $scope.$watchCollection('categories', updateChart);
        }
      };
    }
  ]);

  app.controller('HoursCtrl', [
    '$scope',
    function ($scope) {
      $scope.filter = {
        tweets: true,
        replies: true,
        retweets: true
      };
      $scope.categories = null;
      $scope.updateFilter = function () {
        $scope.categories = [];
        Object.keys($scope.filter).forEach(function (name) {
          if ($scope.filter[name]) {
            $scope.categories.push(name);
          }
        });
      };
      $scope.updateFilter();
    }
  ]);

  ng.bootstrap(document.body, ['app']);

  return app;
});
