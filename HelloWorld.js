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
                    appearancePanel: {
                        uses: "settings",
                        items: {
                            MyStringProp: {
                                ref: "myDynamicOutput",
                                type: "string",
                                label: "Hello World Text"
                            }
                        }
                    }
                }
            },
            //Paint resp.Rendering logic
            paint: function($element, layout) {

                //lazy
                //$element.empty();


                //Smart
                var id = layout.qInfo.qId + '_helloworld';
                var $helloWorld = $('#' + id);
                if (!$helloWorld.length) {
                    console.log('No element found with the given Id, so create the element');
                    $helloWorld = $(document.createElement('div'));
                    $helloWorld.attr('id', id);
                    $helloWorld.html('Hello World');
                    $element.append($helloWorld);
                } else {
                    console.log('Found an element with the given Id, so just change it');
                    $helloWorld.html('Hello World');
                }

            }
        };
    });