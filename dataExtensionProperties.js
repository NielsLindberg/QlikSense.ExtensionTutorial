define([], function() {
    'use strict';

    // *****************************************************************************
    // Dimensions & Measures & Sorting
    // *****************************************************************************
    var dimensions = {
        uses: "dimensions"
    };

    var growthArrow = {
        type: "boolean",
        label: "Growth Arrow",
        ref: "qDef.growtharrow",
        defaultValue: false
    };
    var lowerBound = {
                type: "number",
                label: "Lower Bound",
                expression: "optional",
                ref: "qDef.lowerbound",
                defaultValue: -0.1
    };
    var upperBound= {
                type: "number",
                label: "Upper Bound",
                expression: "optional",
                ref: "qDef.upperbound",
                defaultValue: 0.1
    };

    var measures = {
        uses: "measures",
        items: {
            growthArrow: growthArrow,
            growthArrowLB: lowerBound,
            growthARrowUB: upperBound
        }
    };

    var sorting = {
        uses: "sorting"
    };
    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings",
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
            sorting: sorting,
            appearance: appearanceSection

        }
    };

});
