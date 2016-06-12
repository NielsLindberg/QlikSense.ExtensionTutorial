define([
        'jquery',
        './dataExtensionProperties',
        'css!./styles.css',
        'css!//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
    ],
    function($, props) {
        'use strict';
        return {
            definition: props,
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 10,
                        qHeight: 100
                    }]
                }
            },
            paint: function($element, layout) {

                var hc = layout.qHyperCube;
                console.log('Data returned: ', hc);

                $element.empty();
                var table = '<table>';
                table += '<thead>';
                table += '<tr>';

                //irreterate over dimensionsInfo
                hc.qDimensionInfo.forEach(function(dim, index) {
                    table += '<th class="left-align">' + dim.qFallbackTitle + '</th>';
                });

                //irreterate over measuresInfo
                hc.qMeasureInfo.forEach(function(mes, index) {
                    table += '<th class="right-align">' + mes.qFallbackTitle + '</th>';
                });

                table += '</tr>';
                table += '<thead>';
                table += '<tbody>';

                //irreterate over all rows
                hc.qDataPages[0].qMatrix.forEach(function(row, index) {
                    table += '<tr>';

                    row.forEach(function(cell, index) {
                        var cellValue = '<td class="right-align">' + cell.qText + '</td>';
                        if (index - hc.qDimensionInfo.length >= 0) {
                            if (hc.qMeasureInfo[index - hc.qDimensionInfo.length].growtharrow) {
                                if (cell.qNum < hc.qMeasureInfo[index - hc.qDimensionInfo.length].lowerbound) {
                                    cellValue = '<td class="right-align arrow"><img src="/extensions/DataExtension/arrowDown.png" alt="arrow-down"></td>';
                                } else if (cell.qNum > hc.qMeasureInfo[index - hc.qDimensionInfo.length].upperbound) {
                                    cellValue = '<td class="right-align arrow"><img src="/extensions/DataExtension/arrowUp.png" alt="arrow-up"></td>';
                                } else {
                                    cellValue = '<td class="right-align arrow"></td>';
                                }
                            }
                        } else  {
                            cellValue = '<td class="left-align">' + cell.qText + '</td>';
                        }
                        table += cellValue;
                    });
                    table += '</tr>';
                });

                table += '<tbody>';
                table += '</table>';
                var container = '<div class="dataTable">' + table + '</div>';
                $element.append(container);

            }
        };
    });
