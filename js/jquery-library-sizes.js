/*jslint browser:true, indent:2*/
/*global google*/ // Google JavaScript loader
/*globals define, require*/ // Require.JS

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(function () {
  'use strict';
  require(['jquery'], function ($) {

    function drawChart(name) {
      var data, options, chart, table$;

      table$ = $('#table-' + name);

      data = [];
      data.push(['date', '1.x-raw', '1.x-gzip', '2.x-raw', '2.x-gzip']);
      table$.children('tbody').children('tr').each(function (index, element) {
        var row;
        row = [];
        $(element).children('th, td').each(function (col, cell) {
          if (col === 0) {
            row.push($(cell).text());
          } else {
            row.push(parseInt($(cell).text() || '0', 10));
          }
        });
        data.push(row);
      });

      data = google.visualization.arrayToDataTable(data);

      options = {};

      chart = new google.visualization.LineChart($('#chart-' + name)[0]);
      chart.draw(data, options);
    }

    $.each(['dev', 'prod'], function (index, name) {
      drawChart(name);
    });

  });
});


