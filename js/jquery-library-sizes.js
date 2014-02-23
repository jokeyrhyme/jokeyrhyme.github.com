/*jslint browser:true, indent:2*/
/*globals define, require*/ // Require.JS

// draw the release size charts
define(['jquery', 'chart', 'modernizr'], function ($, Chart, Modernizr) {
  'use strict';

  if (!Modernizr.canvas) {
    return null;
  }

  function drawChart(name) {
    var data, chart, table$, chart$, colors;

    table$ = $('#table-' + name);
    chart$ = $('#chart-' + name);

    chart$.attr({
      width: chart$.parent().innerWidth(),
      height: 200
    });

    colors = ['rgb(150, 0, 0)', 'rgb(150, 0, 150)', 'rgb(0, 150, 0)', 'rgb(0, 150, 150)'];

    data = {
      labels: [],
      datasets: []
    };

    /*jslint unparam:true*/ // unused index
    table$.children('tbody').children('tr').each(function (index, element) {
      $(element).children('th, td').each(function (col, cell) {
        if (col === 0) {
          data.labels.push($(cell).text());
        } else {
          data.datasets[col - 1] = data.datasets[col - 1] || {
            fillColor: 'transparent',
            strokeColor: colors[col - 1],
            pointColor: colors[col - 1],
            pointStrokeColor: '#fff',
            data: []
          };
          data.datasets[col - 1].data.push(parseInt($(cell).text() || '0', 10));
        }
      });
    });
    /*jslint unparam:false*/

    chart = new Chart(chart$[0].getContext('2d')).Line(data, {});

    return chart;
  }

  /*jslint unparam:true*/ // unused index
  $.each(['dev', 'prod'], function (index, name) {
    drawChart(name);
  });
  /*jslint unparam:false*/

});

// draw the custom size chart
require(['jquery', 'chart'], function ($, Chart) {
  'use strict';

  var data, chart, table$, chart$, colors;

  table$ = $('#table-custom');
  chart$ = $('#chart-custom');

  chart$.attr({
    width: chart$.parent().innerWidth(),
    height: 300
  });

  colors = ['rgb(150, 0, 0)', 'rgb(0, 150, 0)', 'rgb(150, 0, 150)', 'rgb(0, 150, 150)'];

  data = {
    labels: [],
    datasets: []
  };

  /*jslint unparam:true*/ // unused index
  table$.children('tbody').children('tr').each(function (index, element) {
    $(element).children('th, td').each(function (col, cell) {
      if (col === 0) {
        data.labels.push($(cell).text());
      } else {
        data.datasets[col - 1] = data.datasets[col - 1] || {
          fillColor: colors[col - 1].replace('rgb', 'rgba').replace(')', ', 0.5)'),
          strokeColor: colors[col - 1],
          data: []
        };
        data.datasets[col - 1].data.push(parseInt($(cell).text() || '0', 10));
      }
    });
  });
  /*jslint unparam:false*/

  chart = new Chart(chart$[0].getContext('2d')).Bar(data, {});

  return chart;
});
