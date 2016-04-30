import d3 from 'd3';
import { Iroom } from './Iroom';
import { room } from './room';
import { Ifurniture } from './Ifurniture';

export class plan {

    private _width = 1024;
    private _height = 768;
    private _container: d3.Selection<any>;
    private _rooms: Array<room>;
    private _scale: d3.scale.Linear<number, number>;

    constructor(containerId: string) {
        this._rooms = [];
        var svg = d3.select('#' + containerId)
            .append('svg')
            .attr({
                'width': this._width,
                'height': this._height
            });
        svg.append('rect')
            .attr({
                width: this._width,
                'height': this._height
            })
            .style({
                'fill': '#efefef'
            });
        this._container = svg.append('g')
            .classed('plan', true)
            .attr('transform', `translate(${10},${10})`);
        this._container.append('g')
            .classed('rooms', true);

        this._scale = d3.scale.linear()
            .range([0, 100])
            .domain([0, 100]);
    }

    public addWall(width: number, height: number): d3.Selection<any> {
        var wall = this._container.append('g')
            .classed('wall', true)
            .append('rect')
            .attr({
                'x': 0,
                'y': 0,
                'width': this._scale(width),
                'height': this._scale(height)
            });
        return wall;
    }

    public render(rooms: Array<Iroom>) {

        var group = this._container.select('g.rooms');

        var roomGroups = group
            .selectAll('.room')
            .data(rooms)
            .enter()
            .append('g')
            .classed('room', true)
            .attr({
                'transform': d => {
                    return `translate(${this._scale(d.x)},${this._scale(d.y)})`
                }
            });
        this.renderShape(roomGroups);
        this.renderNames(roomGroups);
        this.renderFurnitures(roomGroups);

    }

    private renderShape(roomGroups: d3.Selection<Iroom>) {
        var lineGenerator = d3.svg.line()
            .x(d => this._scale(d[0]))
            .y(d => this._scale(d[1]));

        roomGroups.append('path')
            .attr('d', d => lineGenerator(d.points))
            .attr({
                fill: d => d.color
            });
    }

    private renderNames(roomGroups: d3.Selection<Iroom>) {

        roomGroups
            .append('text')
            .attr({
                'transform': d => {
                    var xMin = d3.min(d.points, p => p[0]);
                    var xMax = d3.max(d.points, p => p[0]);
                    var yMin = d3.min(d.points, p => p[1]);
                    var yMax = d3.max(d.points, p => p[1]);
                    return `translate(${this._scale((xMax + xMin) / 2)},${this._scale((yMax + yMin) / 2)})`
                }
            })
            .style({
                'text-transform': 'uppercase',
                'text-anchor': 'middle'
            })
            .text(d => d.name);
    }

    private renderFurnitures(roomGroups: d3.Selection<Iroom>) {
        roomGroups.append('g')
            .classed('furnitures', true)
            .selectAll('.furniture')
            .data<Ifurniture>(d => d.furnitures)
            .enter()
            .append('g')
            .attr('class', d => d.name)
            .classed('furniture', true)
            .attr('transform', (d: Ifurniture) => `translate(${this._scale(d.x)},${this._scale(d.y)})`)
            .append('rect')
            .attr({
                'x': 0,
                'y': 0,
                'width': d => this._scale(d.width),
                'height': d => this._scale(d.height),
                'fill': d => d.color
            });
    }

    private renderDoors(roomGroups: d3.Selection<Iroom>) {
        // var arc = d3.svg.arc();
        roomGroups.append('g')
            .classed('doors', true)
            .data(d => d.doors)
            .enter()
            .append('g')
            .classed('door', true)
            .attr('transform', d => `translate(${this._scale(d.cx)},${this._scale(d.cy)})`)
            .append('path')
            .attr('d', d => {
                var arc = d3.svg.arc()
                    .innerRadius(0)
                    .outerRadius(d.size)
                    .startAngle(d.startAngle)
                    .endAngle(d.endAngle);
                return <any>arc;
            });
    }
}