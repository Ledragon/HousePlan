/// <reference path="../typings/browser.d.ts" />
module app {
    export class plan {
        private width = 800;
        private height = 600;
        private _room: d3.Selection<any>;
        constructor() {
            var svg = d3.select('#container')
                .append('svg')
                .attr({
                    'width': this.width,
                    'height': this.height
                });
            svg.append('rect')
                .attr({
                    width: this.width,
                    'height': this.height
                })
                .style({
                    'fill': '#efefef'
                });
            var room = svg.append('g')
                .classed('room', true);
            // .style({
            //     'transform': 'rotate(180deg)',
            //     'transform-origin': 'center'
            // });
            var xScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            var yScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);

            var lineGenerator = d3.svg.line()
                .x(d => xScale(d[0]))
                .y(d => yScale(d[1]))
                ;
            var v1 = 109.5 + 114;
            var v2 = v1 + 116.5;
            var v3 = v2 + 16;
            var v4 = v3 - 140;
            var v5 = v4 - 80;
            var v6 = v5 - 113;
            var points: [number, number][] = [
                [0, 0],
                [0, 109.5],
                [32, 109.5],
                [32, v1],
                [0, v1],
                [0, v2],
                [170, v2],
                [170, v3],
                [300, v3],
                [300, v4],
                [300, v5],
                [300, v6],
                [300-18.5, v6],
                [300-18.5-156, v6],
                [300-18.5-156-127, v6]
            ];
            room.append('path')
                .attr('d', lineGenerator(points));

        }
    }
}

new app.plan();