// https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.pollUntil = factory();
  }
}(this, function () {
  'use strict';
  // https://gist.github.com/jokeyrhyme/9753904
  /**
   * @param {Function} condition a function that returns `true` or `false`
   * @param {Number} [interval=197] the amount of time to wait between tests
   * @param {Function} callback a function to invoke when the condition returns `true`
   * @returns {Function} call this to stop early (but no earlier than first check)
   */
  return function pollUntil(condition, interval, callback) {
    var timeout;
    if (condition && condition()) {
      timeout = null;
      callback();
    } else {
      timeout =  setTimeout(function () {
        pollUntil(condition, interval, callback);
      }, interval || 197);
    }
    return function stop() {
      clearTimeout(timeout);
    };
  };
}));
