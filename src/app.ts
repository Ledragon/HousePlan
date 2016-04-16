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

            this.createOffice(svg);
        }

        private createOffice(container: d3.Selection<any>) {
            var y1 = 140;
            var y2 = y1 + 80;
            var y3 = y2 + 135;

            var x1 = 18.5;
            var x2 = x1 + 156;
            var x3 = x2 + 127;

            var y11 = y3 - 109.5;
            var y12 = y11 - 114;
            var y13 = y12 - 116.5;

            var x11 = x3 - 32;
            var x12 = x3 - 170;

            var points: [number, number][] = [
                [0, 0],
                [0, y1],
                [0, y2],
                [0, y3],
                [x1, y3],
                [x2, y3],
                [x3, y3],
                [x3, y11],
                [x11, y11],
                [x11, y12],
                [x3, y12],
                [x3, y13],
                [x12, y13],
                [x12, 0],
                [0, 0]
            ];
            this.createRoom(container, points, 'bureau')
                .attr('transform','translate(10,10)');
        }

        private createRoom(container: d3.Selection<any>, points: Array<[number, number]>, name: string): d3.Selection<any> {
            var room = container.append('g')
                .attr('id', name)
                .classed('room', true);
            var xScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            var yScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            var xMax = d3.max(points, p => p[0]);
            var yMax = d3.max(points, p => p[1]);

            var lineGenerator = d3.svg.line()
                .x(d => xScale(d[0]))
                .y(d => yScale(d[1]));
            var path = room.append('path')
                .attr('d', lineGenerator(points));
            room.append('text')
                .attr({
                    'transform': `translate(${xMax / 2},${yMax / 2})`

                })
                .style({
                    'text-transform': 'uppercase',
                    'text-anchor': 'middle'
                })
                .text(name);
            return room;
        }
    }
}

new app.plan();