/*jslint indent:2*/
/*globals define, require*/ // Require.JS

/*globals calculateChange, round005*/ // our new functions

require(['angular'], function (ng) {
  'use strict';
  var app = ng.module('app', ['ng']);

  function round(value, decimals) {
    var coefficient = Math.pow(10, decimals);
    value *= coefficient;
    value = Math.floor(value);
    value /= coefficient;
    return value;
  }

  app.controller('ChangeCtrl', [
    '$scope',
    function ($scope) {
      $scope.price = Math.random() * 100;
      $scope.cash = 100;
      $scope.update = function () {
        $scope.price = round($scope.price, 2);
        $scope.cash = round($scope.cash, 2);
        $scope.difference = round($scope.cash - $scope.price, 2);
        $scope.rounded = round005($scope.difference);
        $scope.change = calculateChange($scope.price, $scope.cash);
      };
      $scope.update();
    }
  ]);

  ng.bootstrap(document.body, ['app']);

});
