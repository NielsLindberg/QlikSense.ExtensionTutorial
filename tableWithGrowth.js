define([
        'jquery',
        './tableWithGrowthProperties',
        'css!./styles.css'
    ],
    function($, props) {
        'use strict';
        var palette = [
        "#b0afae",
        "#7b7a78",
        "#545352",
        "#4477aa",
        "#7db8da",
        "#b6d7ea",
        "#46c646",
        "#f93f17",
        "#ffcf02",
        "#276e27",
        "#ffffff",
        "#000000"
    ];
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
                console.log(layout);

                $element.empty();
                var html = '<div class="tbl-wrapper">';
                html += '<section>';
                html += '<div class="tbl-header">';
                html += '<table cellpadding="0", cellspacing="0", border="0">';
                html += '<thead>';
                html += '<tr>';

                //irreterate over dimensionsInfo
                hc.qDimensionInfo.forEach(function(dim, index) {
                    html += '<th class="left-align">' + dim.qFallbackTitle + '</th>';
                });

                //irreterate over measuresInfo
                hc.qMeasureInfo.forEach(function(mes, index) {
                    if (!mes.growtharrow) {
                        html += '<th class="right-align">' + mes.qFallbackTitle + '</th>';
                    } else {
                        html += '<th class="arrow">' + ' ' + '</th>';
                    }
                });

                html += '</tr>';
                html += '</thead>';
                html += '</table>';
                html += '</div>';
                html += '<div class="tbl-content">';
                html += '<table cellpadding="0", cellspacing="0", border="0">';
                html += '<tbody>';

                //irreterate over all rows
                hc.qDataPages[0].qMatrix.forEach(function(row, index) {
                    html += '<tr>';

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
                        } else {
                            cellValue = '<td class="left-align">' + cell.qText + '</td>';
                        }
                        html += cellValue;
                    });
                    html += '</tr>';
                });

                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</section>';
                html += '</div>';
                $element.append(html);
                $element.find('.tbl-header').css("background-color", palette[layout.headerBgColor]);
                $element.find('.tbl-header').css("color", palette[layout.headerColor]);
            }
        };
    });