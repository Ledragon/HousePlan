module app {
    export class app {
        private _plan: plan;
        constructor(containerId: string) {
            this._plan = new plan(containerId);
            var hallPoints = this.createHall();
            var points = this.createOffice();
            var bathroomPoints = this.createBathroom();

            var wall1 = this._plan.addWall(16, 108);
            var hall = this._plan.createRoom(hallPoints, 'hall', 'rgba(205, 155, 50,0.5)');
            var wall2 = this._plan.addWall(11.5, 133);
            var office = this._plan.createRoom(points, 'bureau', 'rgba(205,50,155,0.5)');
            var bathroom = this._plan.createRoom(bathroomPoints, 'WC', 'rgba(205,5,205,0.5)');
            var bathroomWall = this._plan.addWall(17.5, 119.5);
            var officeBathroomWall = this._plan.addWall(11,119.5);
            var officeDoor = this._plan.addDoor(office, 0, 140, 80);

            var xScale = this._plan.xScale();
            var yScale = this._plan.yScale();

            var wall1Width = xScale(16);
            var wall1Height = yScale(108);
            var hallWidth = xScale(d3.max(hallPoints, p => p[0]));
            var hallHeight = yScale(d3.max(hallPoints, p => p[1]));
            var wall2Width = xScale(11.5);
            var wall2Height = yScale(133);
            var officeWidth = xScale(d3.max(points, p => p[0]));
            var officeHeight = yScale(d3.max(points, p => p[1]));

            var totalHeight = officeHeight;

            var bathroomWidth = xScale(d3.max(bathroomPoints, p => p[0]));
            var bathroomXTranslate = hallWidth - bathroomWidth + xScale(17.5);
            var bathroomYTranslate = yScale(140-2.5-11) - yScale(d3.max(bathroomPoints, p => p[1]));
            bathroom.attr('transform', `translate(${bathroomXTranslate},${bathroomYTranslate})`);
            bathroomWall.attr('transform', `translate(${bathroomXTranslate - xScale(17.5)},${xScale(140) - yScale(119.5)})`);
            officeBathroomWall.attr('transform', `translate(${bathroomXTranslate+bathroomWidth},${xScale(140) - yScale(119.5)})`);


            var wall1XTranslate = 0;
            var wall1YTranslate = totalHeight - wall1Height;
            wall1.attr('transform', `translate(${wall1XTranslate},${wall1YTranslate})`);


            var hallXTranslate = wall1Width;
            // var hallYTranslate = totalHeight - hallHeight;
            var hallYTranslate = xScale(totalHeight - 108);
            hall.attr('transform', `translate(${hallXTranslate},${hallYTranslate})`);

            var wall2XTranslate = wall1Width + hallWidth;
            var wall2YTranslate = totalHeight - wall2Height;
            wall2.attr('transform', `translate(${wall2XTranslate},${wall2YTranslate})`);

            var officeXTranslate = wall2XTranslate + wall2Width;
            var officeYTranslate = totalHeight - officeHeight;
            office.attr('transform', `translate(${officeXTranslate},${officeYTranslate})`);
            this._plan.plan().attr('transform', `translate(${200},${200})`)
        }

        private createHall(): Array<[number, number]> {
            var points: Array<[number, number]> = [
                [-16 - 104, 108 - 118 - 79 - 145],
                [-16 - 104, 108 - 118 - 79],
                [-16 - 104, 108 - 148],
                [-16 - 104, 108],
                [-16, 108], //mesure incorrecte; doit prendre en compte le quart de rond a cote de la porte
                [-16, 0],
                [0, 0],
                // [16, 0],
                // [16, 108],
                [0, 108],
                [87, 108],
                [87, 108 - 133],
                [87, 108 - 133 - 80],
                [87 - 84.5, 108 - 133 - 80],
                [87 - 84.5 - 16.5, 108 - 133 - 80],
                [87 - 84.5 - 16.5, 108 - 133 - 80 - 119.5],
                [87 - 84.5 - 16.5 - 15.5, 108 - 133 - 80 - 119.5],
                [87 - 84.5 - 16.5 - 15.5, 108 - 133 - 80 - 119.5 - 28],
                [87 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28],
                [87 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28 - 14],
                [87 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28 - 14 - 78],
                [87 - 84.5 - 16.5 - 15.5 - 1.5 - 76, 108 - 133 - 80 - 119.5 - 28 - 14 - 78],
                [-16 - 104, 108 - 118 - 79 - 145]
            ];
            return points;
        }
        private createBathroom(): Array<[number, number]> {
            105, 84, 107
            var points: Array<[number, number]> = [
                [0, 0],
                [0, -105],
                [84, -105],
                [84, 2],
                [0,0]
            ]
            return points;
        }
        private createOffice(): Array<[number, number]> {
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
            return points;
        }
    }
}