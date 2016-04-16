/// <reference path="../typings/browser.d.ts" />
module app {
    export class plan {

        private _width = 800;
        private _height = 600;
        private _container: d3.Selection<any>;
        private _rooms: Array<any>;
        private _xScale: d3.scale.Linear<number, number>;
        private _yScale: d3.scale.Linear<number, number>;

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

            this._xScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            this._yScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
        }

        public createRoom(points: Array<[number, number]>, name: string, color: string): d3.Selection<any> {
            var room = this._container.append('g')
                .attr('id', name)
                .classed('room', true);
            var xMax = d3.max(points, p => p[0]);
            var yMax = d3.max(points, p => p[1]);

            var lineGenerator = d3.svg.line()
                .x(d => this._xScale(d[0]))
                .y(d => this._yScale(d[1]));
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
            });

            return room;
        }

        public addWall(width: number, height: number): d3.Selection<any> {
            var wall = this._container.append('g')
                .classed('wall', true)
                .append('rect')
                .attr({
                    'x': 0,
                    'y': 0,
                    'width': this._xScale(width),
                    'height': this._yScale(height)
                });
            return wall;
        }

        public xScale() {
            return this._xScale;
        }

        public yScale() {
            return this._yScale;
        }
    }
}
