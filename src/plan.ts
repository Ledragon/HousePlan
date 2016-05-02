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

    private _dispatch: any;

    constructor(containerId: string) {
        this._rooms = [];
        var svg = d3.select('#' + containerId)
            .append('svg')
            .attr({
                'width': '100%',
                'height': this._height
            });
        svg.append('rect')
            .attr({
                width: '100%',
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

        this._dispatch = d3.dispatch('roomclicked');
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
            .data(rooms);
        roomGroups.exit()
            .remove();
        var roomGroup = roomGroups.enter()
            .append('g')
            .classed('room', true)
            .on('click', (d) => {
                this._dispatch.roomclicked(d);
            });
        roomGroup.append('path');
        roomGroup.append('text');
        roomGroup.append('g')
            .classed('furnitures', true);

        roomGroup.append('g')
            .classed('sizes', true);
        roomGroups.attr({
            'transform': d => {
                return `translate(${this._scale(d.x)},${this._scale(d.y)})`
            }
        });
        this.renderShape(roomGroups);
        this.renderNames(roomGroups);
        this.renderFurnitures(roomGroups);
        // this.renderSizes(roomGroups);
        // this.renderDoors(roomGroups);
    }

    private renderShape(roomGroups: d3.Selection<Iroom>) {
        var lineGenerator = d3.svg.line()
            .x(d => this._scale(d[0]))
            .y(d => this._scale(d[1]));
        roomGroups
            .select('path')
            // .append('path')
            .attr('d', d => {
                var points = d.points;
                if (d.walls) {
                    points = [[0, 0]];
                    var point: [number, number] = [0, 0];
                    d.walls.forEach((w, i) => {
                        var angle = w.angle * Math.PI / 180;
                        var width = point[0] + w.length * Math.sin(angle);
                        var height = point[1] + w.length * Math.cos(angle);
                        // linePoints.push([point[0], point[1], width, height])
                        point = [width, height];
                        points.push(point);
                    });
                    d.points = points;
                }
                return lineGenerator(points);
            })
            .attr({
                fill: d => d.color
            });

    }

    private renderNames(roomGroups: d3.Selection<Iroom>) {
        roomGroups
            .select('text')
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
        roomGroups.select('g.furnitures')
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
        var arc = d3.svg.arc()
            .innerRadius(0)
        roomGroups.append('g')
            .classed('doors', true)
            .selectAll('.door')
            .data<any>(d => d.doors)
            .enter()
            .append('g')
            .classed('door', true)
            .attr('transform', d => `translate(${this._scale(d.cx)},${this._scale(d.cy)})`)
            .append('path')
            .attr('d', d => arc({ innerRadius: 0, outerRadius: d.size, startAngle: d.startAngle, endAngle: d.endAngle, padAngle: 0 }));
    }

    private renderSizes(roomGroups: d3.Selection<Iroom>) {
        roomGroups.select('g.sizes')
            .selectAll('.size')
            .data(d => d.walls ? d.walls : [])
            .enter()
            .append('text')
            .classed('size', true)
            .text((d: any) => d.length);
    }

    public dispatch(): d3.Dispatch {
        return this._dispatch;
    }
}