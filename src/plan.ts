/// <reference path="../typings/browser.d.ts" />
module app {
    export class plan {

        private _width = 800;
        private _height = 600;
        private _container: d3.Selection<any>;
        private _rooms: Array<any>;
        
        constructor(containerId: string) {
            this._rooms = [];
            this._container = d3.select('#' + containerId)
                .append('svg')
                .attr({
                    'width': this._width,
                    'height': this._height
                })
                .append('g')
                .classed('plan', true);
            this._container
                .append('rect')
                .attr({
                    width: this._width,
                    'height': this._height
                })
                .style({
                    'fill': '#efefef'
                });
        }

        public createRoom(points: Array<[number, number]>, name: string, color:string): d3.Selection<any> {
            var room = this._container.append('g')
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
                .attr('d', lineGenerator(points))
                .attr({
                    fill: color
                });
            room.append('text')
                .attr({
                    'transform': `translate(${xMax / 2},${yMax / 2})`
                })
                .style({
                    'text-transform': 'uppercase',
                    'text-anchor': 'middle'
                })
                .text(name);

            this._rooms.push({
                name: name,
                points: points
            })
            return room;
        }
    }
}
