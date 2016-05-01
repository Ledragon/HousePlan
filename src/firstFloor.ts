import { Iroom } from './Iroom';
export class firstFloor {
    constructor() {
    }
    private createRoom2(): Iroom {
        var result: Iroom = {
            name: 'chambre-2',
            color: 'rgba(205, 155, 50,0.5)',
            points: [
                [0, 0],
                [0, 143],
                [22, 143],
                [22, 143 + 74],
                [0, 143 + 74],
                [0, 143 + 74 + 154.5],
                [339, 143 + 74 + 154.5],
                [339, 143 + 74 + 154.5 - 242],
                [339, 143 + 74 + 154.5 - 242 - 80],
                [339, 143 + 74 + 154.5 - 242 - 80 - 47],
                [0, 0]
            ],
            'x': 0,
            'y': 0,
            furnitures: [],
            walls: [
                {
                    length: 143,
                    angle: 0
                },
                {
                    length: 22,
                    angle: 90
                },
                {
                    length: 74,
                    angle: 180
                },
                {
                    length: 22,
                    angle: 269
                },
                
                {
                    length: 154.5,
                    angle: 0
                },
                
                {
                    length: 339,
                    angle: 90
                },
            ]
        };
        return result;
    }

    public getRooms(): Iroom[] {
        return [this.createRoom2()];
    }
}