import d3 from 'd3';
import { room } from './room';

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
            .classed('plan', true);

        this._scale = d3.scale.linear()
            .range([0, 100])
            .domain([0, 100]);
    }

    public createRoom(points: Array<[number, number]>, name: string, color: string): room {
        var r = new room(this._container, this._scale, name, points, color);
        this._rooms.push(r);
        return r;
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

    public scale() {
        return this._scale;
    }
    
    public plan() {
        return this._container;
    }
}