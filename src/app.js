/// <reference path="../typings/browser.d.ts" />
var app;
(function (app) {
    var plan = (function () {
        function plan() {
            this.width = 800;
            this.height = 600;
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
                .attr('transform', 'translate(10,10)')
                .classed('room', true);
            var xScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            var yScale = d3.scale.linear()
                .range([0, 100])
                .domain([0, 100]);
            var lineGenerator = d3.svg.line()
                .x(function (d) { return xScale(d[0]); })
                .y(function (d) { return yScale(d[1]); });
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
            var points = [
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
            room.append('path')
                .attr('d', lineGenerator(points));
        }
        return plan;
    }());
    app.plan = plan;
})(app || (app = {}));
new app.plan();
