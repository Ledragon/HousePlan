import { plan } from './plan';
import { Ifurniture } from './Ifurniture';
import { Iroom } from './Iroom';

export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);

        var hallModel: Iroom = {
            name: 'hall',
            color: 'rgba(205, 155, 50,0.5)',
            points: this.createHall(),
            'x': 345,
            'y': 643,
            furnitures: []
        };

        var kitchenModel: Iroom = {
            name: 'cuisine',
            color: 'rgba(50, 50, 155,0.5)',
            points: this.createKitchen(),
            'x': 425,
            'y': 30,
            furnitures: []
        };

        var officeModel: Iroom = {
            name: 'bureau',
            color: 'rgba(205,50,155,0.5)',
            points: this.createOffice(),
            'x': 565,
            'y': 395,
            furnitures: [
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
                    name: 'table', color: 'white', width: 100, height: 60, x: 200, y: 294
                }
            ]
        }

        var livingRoomModel: Iroom = {
            name: 'living',
            color: 'rgba(50, 155, 50,0.5)',
            points: this.createLivingRoom(),
            'x': 0,
            'y': 0,
            furnitures: []
        };

        var bathroom: Iroom = {
            name: 'WC',
            color: 'rgba(50, 155, 155,0.5)',
            points: this.createBathroom(),
            'x': 468,
            'y': 530,
            furnitures: []
        }
        
        var rooms = [
            hallModel,
            kitchenModel,
            officeModel,
            livingRoomModel,
            bathroom
        ];
        
        this._plan.render(rooms);
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
            [0, 335],
            [440, 335],
            [440, 335 - 288],
            [440 - 23, 335 - 288],
            [440 - 23, 335 - 288 - 76],
            [440 - 23 - 88, 335 - 288 - 76],
            [440 - 23 - 88, 335 - 288 - 76 + 80.5],
            [440 - 23 - 88 - 186, 335 - 288 - 76 + 80.5],
            [440 - 23 - 88 - 186, 335 - 288 - 76 + 80.5 - 30],
            [440 - 23 - 88 - 186 - 33.5, 335 - 288 - 76 + 80.5 - 30],
            [440 - 23 - 88 - 186 - 33.5, 335 - 288 - 76 + 80.5 - 30 - 21.9],
            [0, 0]
        ];
        return points;
    }
}
