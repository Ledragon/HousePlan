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
            var walls: wall[] = [
                new wall(0, 0, 0, 109.5),
                new wall(0, 109.5, 32, 109.5),
                new wall(32, 109.5, 32, 109.5 + 114),
                new wall(32, 109.5 + 114, 0, 109.5 + 114),
                new wall(0, 109.5 + 114, 0, 109.5 + 114 + 116),
            ];
            room.selectAll('.wall')
                .data(walls)
                .enter()
                .append('g')
                .classed('wall', true)
                .append('line')
                .attr({
                    'x1': d => xScale(d.x1),
                    'y1': d => xScale(d.y1),
                    'x2': d => xScale(d.x2),
                    'y2': d => xScale(d.y2)
                });

        }
    }

    class wall {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(x1: number,
            y1: number,
            x2: number,
            y2: number) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
    }
}

new app.plan();