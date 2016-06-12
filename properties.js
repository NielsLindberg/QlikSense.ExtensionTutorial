define([], function() {
    'use strict';

    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
    var dimensions = {
        uses: "dimensions",
        min: 0,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 0,
        max: 1
    };

    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    var myTextBox = {
        ref: "props.myTextBox",
        label: "My Text Box",
        type: "string",
        expression: "optional"
    };
    var myTextBox2 = {
        ref: "props.myTextBox2",
        label: "My Text Box 2",
        type: "string",
        expression: "optional"
    };

    var appearanceSection = {
        uses: "settings",
        items: {
            myNewHeader: {
                type: "items",
                label: "My header, containing text boxes",
                items: {
                    myTextBox: myTextBox,
                    myTextBox2: myTextBox2
                }
            }
        }
    };

    var header1_item1 = {
        ref: "props.section1.item1",
        label: "Section 1 / Item 1",
        type: "string",
        expression: "optional"
    };
    var header1_item2 = {
        ref: "props.section1.item2",
        label: "Section 1 / Item 2",
        type: "string",
        expression: "optional"
    };
    var header2_item1 = {
        ref: "props.section2.item1",
        label: "Section 2 / Item 1",
        type: "string",
        expression: "optional"
    };
    var header2_item2 = {
        ref: "props.section2.item2",
        label: "Section 2 / Item 2",
        type: "string",
        expression: "optional"
    };


    // Define a custom section
    var myCustomSection = {
        // not necessary to define the type, component "expandable-items" will automatically
        // default to "items"
        // type: "items"
        component: "expandable-items",
        label: "My Accordion Section",
        items: {
            header1: {
                type: "items",
                label: "Header 1",
                items: {
                    header1_item1: header1_item1,
                    header1_item2: header1_item2
                }
            },
            header2: {
                type: "items",
                label: "Header 2",
                items: {
                    header2_item1: header2_item2,
                    header2_item2: header2_item2
                }
            }

        }
    };
    // *****************************************************************************
    // Main property panel definition
    // ~~
    // Only what's defined here will be returned from properties.js
    // *****************************************************************************

    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            appearance: appearanceSection,
            customSection: myCustomSection

        }
    };

});
