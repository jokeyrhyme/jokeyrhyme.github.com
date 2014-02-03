/*jslint indent:2*/

/*globals angular*/ // Angular.JS

/*globals calculateChange*/ // our new function

var app = angular.module('app', ['ng']);

function round(value, decimals) {
  var coefficient = Math.pow(10, decimals);
  value *= coefficient;
  value = Math.floor(value);
  value /= coefficient;
  return value;
}

function round5(value) {
  var coefficient, remainder;
  coefficient = 100;
  value *= coefficient;
  remainder = value % 5;
  if (remainder < 5) {
    value -= remainder;
  } else {
    value += 10 - remainder;
  }
  value /= coefficient;
  return value;
}

app.controller('ChangeCtrl', [
  '$scope',
  function ($scope) {
    $scope.units = calculateChange.UNITS;
    $scope.price = Math.random() * 100;
    $scope.cash = 100;
    $scope.update = function () {
      $scope.price = round($scope.price, 2);
      $scope.cash = round($scope.cash, 2);
      $scope.difference = round($scope.cash - $scope.price, 2);
      $scope.rounded = round5($scope.difference);
    };
    $scope.update();
  }
]);

angular.bootstrap(document.body, ['app']);
