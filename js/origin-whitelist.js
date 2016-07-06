(function () {
  'use strict'

  var ORIGIN_WHITELIST = [
    'https://jokeyrhyme.github.io'
  ]

  function isWhitelisted (origin) {
    return ORIGIN_WHITELIST.indexOf(location.origin) !== -1
  }

  function isDevelopment (hostname) {
    return hostname === 'localhost' ||
      /\d+\.\d+\.\d+\.\d+/.test(hostname)
  }

  if (
    typeof location === 'undefined' ||
    typeof location.hostname !== 'string' ||
    typeof location.origin !== 'string'
  ) {
    return // cannot depend on location /shrug
  }

  if (
    !isWhitelisted(location.origin) &&
    !isDevelopment(location.hostname)
  ) {
    console.warn('current origin ' + location.origin + ' not whitelisted!')
  }
}())
