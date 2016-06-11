define([
        'jquery'
    ],
    function($) {
        'use strict';

        return {

            definition: {
                type: "items",
                component: "accordion",
                items: {
                    dimensions: {
                        uses: "dimensions"
                    },
                    measures: {
                        uses: "measures"
                    },
                    sorting: {
                        uses: "sorting"
                    },
                    appearancePanel: {
                        uses: "settings"
                    }
                }
            },
            //Paint resp.Rendering logic
            paint: function($element, layout) {
                $element.empty();

                console.info('paint >> layout >> ', layout);
                var $msg = $( document.createElement( 'div' ));

                var html = '<strong>Property values: </strong><br/>';
                html += 'Title: ' + layout.title + '<br/>';
                html += 'SubTitle: ' + layout.subtitle + '<br/>';

                $msg.html( html );

                $element.append($msg);


            }
        };
    });
