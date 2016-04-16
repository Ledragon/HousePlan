(function() {
    'use strict';
    d3.select('#container')
        .append('svg').attr({
            width: '800',
            'height': '600'
        })
        .append('rect')
        .attr({
            width: '800',
            'height': '600'
        })
        .style({
            'fill': '#efefef'
        });

} ());