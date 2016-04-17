import d3 from 'd3';

export class plan {

    private _width = 800;
    private _height = 600;
    private _container: d3.Selection<any>;
    private _rooms: Array<any>;
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
        this._scale = d3.scale.linear()
            .range([0, 100])
            .domain([0, 100]);
    }

    public createRoom(points: Array<[number, number]>, name: string, color: string): d3.Selection<any> {
        var room = this._container.append('g')
            .attr('id', name)
            .classed('room', true);
        var xMin = d3.min(points, p => p[0]);
        var xMax = d3.max(points, p => p[0]);
        var yMin = d3.min(points, p => p[1]);
        var yMax = d3.max(points, p => p[1]);

        var lineGenerator = d3.svg.line()
            .x(d => this._scale(d[0]))
            .y(d => this._scale(d[1]));
        var path = room.append('path')
            .attr('d', lineGenerator(points))
            .attr({
                fill: color
            });
        room.append('text')
            .attr({
                'transform': `translate(${this._scale((xMax + xMin) / 2)},${this._scale((yMax + yMin) / 2)})`
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
                'width': this._scale(width),
                'height': this._scale(height)
            });
        return wall;
    }

    public addDoor(container: d3.Selection<any>, cx: number, cy: number, size: number): d3.Selection<any> {
        var door = container.append('g')
            .classed('door', true)
            .attr('transform', `translate(${this._scale(cx)},${this._scale(cy)})`);
        var arc = d3.svg.arc()
            .outerRadius(size);
        door.append('path')
            .attr('d', arc({
                startAngle: Math.PI / 2,
                endAngle: Math.PI,
                innerRadius: 0,
                outerRadius: size,
                padAngle: 0
            }))
        return door;
    }

    public scale() {
        return this._scale;
    }
    
    public plan() {
        return this._container;
    }
}