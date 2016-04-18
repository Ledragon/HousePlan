import { plan } from './plan';
import { Ifurniture } from './Ifurniture';

export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);
        var scale = this._plan.scale();
        this._plan.plan().attr('transform', `translate(${10},${10})`)

        var hallPoints = this.createHall();
        var points = this.createOffice();
        var bathroomPoints = this.createBathroom();
        var livingPoints = this.createLivingRoom();
        var kitchenPoints = this.createKitchen();
        var kitchen = this._plan.createRoom(kitchenPoints, 'Cuisine', 'rgba(50,50,155,0.5)');

        var livingRoom = this._plan.createRoom(livingPoints, 'Living', 'rgba(50,155,50,0.5)');

        // var wall1 = this._plan.addWall(16, 108);
        var hall = this._plan.createRoom(hallPoints, 'hall', 'rgba(205, 155, 50,0.5)');
        // var wall2 = this._plan.addWall(11.5, 133);
        var office = this._plan.createRoom(points, 'bureau', 'rgba(205,50,155,0.5)');
        var officeWidth = office.width();
        var officeHeight = office.height();
        office.addDoor(0, 140, 80, Math.PI / 2, Math.PI);
        var officeFurnitures: Array<Ifurniture> = [
            {
                name: 'bureau', color: 'rgba(205,205,205,1)', width: 160, height: 60, x: 140, y: 16
            },
            {
                name: 'bibli', color: 'rgba(205,205,205,1)', width: 80, height: 53, x: 2, y: 3
            },
            {
                name: 'petit-meuble', color: 'rgba(205,205,155,1)', width: 40, height: 51, x: 97.5, y: 22.5
            },
            {
                name: 'table', color: 'white', width: 100, height: 60, x: officeWidth - 100, y: officeHeight - 60
            }
        ]
        office.furnitures(officeFurnitures);

        var bathroom = this._plan.createRoom(bathroomPoints, 'WC', 'rgba(50,155,205,0.5)');
        bathroom.addDoor(84, 0, 78, Math.PI, 3 * Math.PI / 2);
        // var bathroomWall = this._plan.addWall(17.5, 119.5);
        // var officeBathroomWall = this._plan.addWall(11, 119.5);


        // var wall1Width = scale(16);
        // var wall1Height = scale(108);
        // var hallWidth = scale(d3.max(hallPoints, p => p[0]));
        // var hallHeight = scale(d3.max(hallPoints, p => p[1]));
        // var wall2Width = scale(11.5);
        // var wall2Height = scale(133);

        var totalHeight = livingRoom.height();
        // var totalWith = livingRoom.width() + hall.width() + office.width();
        var livingHallWalWidth = 12;

        var hallXTranslate = livingRoom.width() + scale(livingHallWalWidth);//wall1XTranslate + wall1Width;
        // var hallYTranslate = totalHeight - hallHeight;
        var hallYTranslate = scale(totalHeight - 108);
        hall.attr('transform', `translate(${hallXTranslate},${hallYTranslate})`);

        var bathroomWidth = bathroom.width();
        var bathroomXTranslate = hallXTranslate + hall.width() - bathroomWidth;
        var bathroomYTranslate = totalHeight - bathroom.height() - scale(-108 + 133 + 119.5 + 80);
        bathroom.attr('transform', `translate(${bathroomXTranslate},${bathroomYTranslate})`);
        // bathroomWall.attr('transform', `translate(${bathroomXTranslate - scale(17.5)},${scale(140) - scale(119.5)})`);
        // officeBathroomWall.attr('transform', `translate(${bathroomXTranslate + bathroomWidth},${scale(140) - scale(119.5)})`);


        // var wall1XTranslate = livingRoom.width();
        // var wall1YTranslate = totalHeight - wall1Height;
        // wall1.attr('transform', `translate(${wall1XTranslate},${wall1YTranslate})`);


        // var wall2XTranslate = wall1Width + hallWidth + hallXTranslate;
        // var wall2YTranslate = totalHeight - wall2Height;
        // wall2.attr('transform', `translate(${wall2XTranslate},${wall2YTranslate})`);
        var officeHallWidth = 11;
        var officeXTranslate = hallXTranslate + hall.width() + scale(officeHallWidth);//wall2XTranslate + wall2Width;
        var officeYTranslate = totalHeight - officeHeight;
        office.attr('transform', `translate(${officeXTranslate},${officeYTranslate})`);
        kitchen.attr('transform', `translate(${officeXTranslate + office.width() - kitchen.width()},${0})`);
    }

    private createHall(): Array<[number, number]> {
        var points: Array<[number, number]> = [
            [0, 108 - 118 - 79 - 145],
            [0, 108 - 118 - 79],
            [0, 108 - 148],
            [0, 108],
            [104, 108], //mesure incorrecte; doit prendre en compte le quart de rond a cote de la porte
            [104, 0],
            [16 + 104, 0],
            // [16, 0],
            // [16, 108],
            [16 + 104, 108],
            [87 + 16 + 104, 108],
            [87 + 16 + 104, 108 - 133],
            [87 + 16 + 104, 108 - 133 - 80],
            [87 + 16 + 104 - 84.5, 108 - 133 - 80],
            [87 + 16 + 104 - 84.5 - 16.5, 108 - 133 - 80],
            [87 + 16 + 104 - 84.5 - 16.5, 108 - 133 - 80 - 119.5],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5, 108 - 133 - 80 - 119.5],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5, 108 - 133 - 80 - 119.5 - 28],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28 - 14],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5 - 1.5, 108 - 133 - 80 - 119.5 - 28 - 14 - 78],
            [87 + 16 + 104 - 84.5 - 16.5 - 15.5 - 1.5 - 76, 108 - 133 - 80 - 119.5 - 28 - 14 - 78],
            [0, 108 - 118 - 79 - 145]
        ];
        return points;
    }
    private createBathroom(): Array<[number, number]> {
        105, 84, 107
        var points: Array<[number, number]> = [
            [0, 0],
            [0, -105],
            [84, -105],
            [84, 0],
            [0, 0]
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

    private createLivingRoom(): Array<[number, number]> {
        var points: [number, number][] = [
            [120, 0],
            [120, 65.5],
            [0, 65.5],
            [0, 276 + 65.5],
            [79.5, 276 + 65.5],
            [79.5, 276 + 65.5 + 40.5],
            [-0.5, 276 + 65.5 + 40.5],
            [-0.5, 276 + 65.5 + 40.5 + 112],
            [-0.5 + 28.5, 276 + 65.5 + 40.5 + 112],
            [-0.5 + 28.5, 276 + 65.5 + 40.5 + 112 + 131],
            [-0.5 + 28.5 - 29.5, 276 + 65.5 + 40.5 + 112 + 131],
            [-0.5 + 28.5 - 29.5, 276 + 65.5 + 40.5 + 112 + 131 + 126],
            [-0.5 + 28.5 - 29.5 + 338, 276 + 65.5 + 40.5 + 112 + 131 + 126],
            [-0.5 + 28.5 - 29.5 + 338, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131],
            [-0.5 + 28.5 - 29.5 + 338, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5],
            [-0.5 + 28.5 - 29.5 + 338, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5],
            [-0.5 + 28.5 - 29.5 + 338 - 22, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5],
            [-0.5 + 28.5 - 29.5 + 338 - 22, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5],
            [-0.5 + 28.5 - 29.5 + 338 - 22, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5 - 316.5],
            [-0.5 + 28.5 - 29.5 + 338 - 22 - 17.5, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5 - 316.5],
            [-0.5 + 28.5 - 29.5 + 338 - 22 - 17.5, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5 - 316.5 - 77.5],
            [120, 0]
            // [-0.5 + 28.5 - 29.5 + 338-22-17.5-157, 276 + 65.5 + 40.5 + 112 + 131 + 126 - 131 - 78.5 - 152.5-316.5-77.5],
        ];
        return points;
    }

    private createKitchen(): Array<[number, number]> {
        var points: [number, number][] = [
            [0, 0],
            [0, 365],
            [440, 365],
            [440, 365 - 288],
            [440 - 23, 365 - 288],
            [440 - 23, 365 - 288 - 76],
            [440 - 23 - 88, 365 - 288 - 76],
            [440 - 23 - 88, 365 - 288 - 76 + 80.5],
            [440 - 23 - 88 - 186, 365 - 288 - 76 + 80.5]
        ];
        return points;
    }
}
