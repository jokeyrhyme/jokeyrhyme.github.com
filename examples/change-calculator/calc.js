/*jslint indent:2*/

function round005(value) {
  var remainder;
  value *= 100;
  remainder = value % 5;
  if (remainder < 5) {
    value -= remainder;
  } else {
    value += 10 - remainder;
  }
  value /= 100;
  return value;
}

function calculateChange(price, cash) {
  var difference, change, units;
  units = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
  difference = cash - price;
  difference = round005(difference);
  change = {};
  units.forEach(function (unit) {
    while (unit < difference) {
      if (!change[unit]) {
        change[unit] = 0;
      }
      change[unit] += 1;
      difference -= unit;
    }
  });
  return change;
}

