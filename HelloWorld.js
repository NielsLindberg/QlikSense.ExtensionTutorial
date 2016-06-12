define([
        'jquery',
        './properties'
    ],
    function( $, props ) {
        'use strict';

        return {

            definition: props,
            paint: function($element, layout) {
                $element.empty();

                console.log('paint >> layout >> ', layout);
                var $msg = $( document.createElement( 'div' ));

                var html = '<strong>Property values: </strong><br/>';
                html += 'Title: ' + layout.title + '<br/>';
                html += 'SubTitle: ' + layout.subtitle + '<br/>';

                $msg.html( html );

                $element.append($msg);


            }
        };
    });
