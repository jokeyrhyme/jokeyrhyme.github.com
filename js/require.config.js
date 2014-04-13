/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

(function () {
  'use strict';
  var google, cdnjs, jquery, microsoft, jQueryVersion;

  cdnjs = '//cdnjs.cloudflare.com/ajax/libs/';
  google = '//ajax.googleapis.com/ajax/libs/';
  jquery = '//code.jquery.com/';
  microsoft = '//ajax.aspnetcdn.com/ajax/';

  if (document.querySelector && window.localStorage && window.addEventListener) {
    jQueryVersion = '2.1.0';
  } else {
    jQueryVersion = '1.11.0';
  }

  require.config({
    paths: {
      angular: [
        google + 'angularjs/1.2.15/angular.min',
        cdnjs + 'angular.js/1.2.15/angular.min'
      ],
      chai: '/bower_components/chai/chai',
      chart: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min',
      IDBStore: cdnjs + 'idbwrapper/1.4.1/idbstore.min',
      jquery: [
        cdnjs + 'jquery/' + jQueryVersion + '/jquery.min',
        google + 'jquery/' + jQueryVersion + '/jquery.min',
        jquery + 'jquery-' + jQueryVersion + '.min',
        microsoft + 'jquery/jquery-' + jQueryVersion + '.min'
      ],
      modernizr: '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min'
    },
    shim: {
      angular: {
        exports: 'angular'
      },
      chart: {
        exports: 'Chart'
      },
      modernizr: {
        exports: 'Modernizr'
      }
    },
    enforceDefine: true
  });

}());
