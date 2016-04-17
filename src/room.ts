import d3 from 'd3';
export class room {
    private _name: string;
    private _points: Array<[number, number]>;
    private _color: string;
    private _group: d3.Selection<any>;
    private _scale: d3.scale.Linear<number, number>;

    constructor(container: d3.Selection<any>, scale: d3.scale.Linear<number, number>, name: string, points: Array<[number, number]>, color: string) {
        this._name = name;
        this._points = points;
        this._color = color;
        this._scale = scale;
        this._group = container
            .append('g')
            .attr('id', name)
            .classed('room', true);
        this.draw();
    }

    private draw(): void {
        var xMin = d3.min(this._points, p => p[0]);
        var xMax = d3.max(this._points, p => p[0]);
        var yMin = d3.min(this._points, p => p[1]);
        var yMax = d3.max(this._points, p => p[1]);

        var lineGenerator = d3.svg.line()
            .x(d => this._scale(d[0]))
            .y(d => this._scale(d[1]));
        var path = this._group
            .append('path')
            .attr('d', lineGenerator(this._points))
            .attr({
                fill: this._color
            });
        this._group
            .append('text')
            .attr({
                'transform': `translate(${this._scale((xMax + xMin) / 2)},${this._scale((yMax + yMin) / 2)})`
            })
            .style({
                'text-transform': 'uppercase',
                'text-anchor': 'middle'
            })
            .text(this._name);
    }

    attr(name: string, value: string) {
        this._group.attr(name, value);
    }

    addDoor(cx: number, cy: number, size: number) {
        var door = this._group.append('g')
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
}