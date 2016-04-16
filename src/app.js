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
            var room = svg.append('g');
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
            var walls = [
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
                'x1': function (d) { return xScale(d.x1); },
                'y1': function (d) { return xScale(d.y1); },
                'x2': function (d) { return xScale(d.x2); },
                'y2': function (d) { return xScale(d.y2); }
            });
        }
        return plan;
    }());
    app.plan = plan;
    var wall = (function () {
        function wall(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        return wall;
    }());
})(app || (app = {}));
new app.plan();
