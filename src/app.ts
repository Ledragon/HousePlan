module app {
    export class app {
        private _plan: plan;
        constructor(containerId: string) {
            this._plan = new plan(containerId);
            this.createOffice();
        }

        private createOffice() {
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
            this._plan.createRoom(points, 'bureau', 'rgba(205,50,155,0.5)')
                .attr('transform', 'translate(10,10)');
        }
    }
}