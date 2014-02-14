/*jslint browser:true, indent:2*/
/*global google*/ // Google JavaScript loader

(function () {
  'use strict';

  function drawChart(name) {
    var data, options, chart, table$;

    table$ = $('#table-' + name);

    data = [];
    table$.find('tr').each(function (index, element) {
      var row;
      row = [];
      $(element).children('th, td').each(function (col, cell) {
        if (col === 0 || index === 0) {
          row.push($(cell).text());
        } else {
          row.push(parseInt($(cell).text(), 10));
        }
      });
      data.push(row);
    });

    data = google.visualization.arrayToDataTable(data);

    options = {
      title: table$.children('caption').text()
    };

    chart = new google.visualization.LineChart($('#chart-' + name)[0]);
    chart.draw(data, options);
  }

  function drawCharts() {
    var names;
    names = [
      'compat-dev',
      'modern-dev',
      'compat-prod',
      'modern-prod'
    ];
    $.each(names, function (index, name) {
      drawChart(name);
    });
  }

  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawCharts);

}());

