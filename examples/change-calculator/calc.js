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
  var difference, change, units, u, unit, unitsLength;
  difference = cash - price;
  difference = round005(difference);
  change = {};
  unitsLength = calculateChange.UNITS.length;
  for (u = 0; u < unitsLength; u += 1) {
    unit = calculateChange.UNITS[u];
    if (unit <= difference) {
      change[unit] = Math.floor(difference / unit);
      difference -= unit * change[unit];
    }
  }
  return change;
}

calculateChange.UNITS = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
