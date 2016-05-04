import { Ifurniture } from './Ifurniture';
export class furnitureManagement {
    static create(): Ifurniture {
        var result: Ifurniture = {
            name: 'furniture',
            x: 0, y: 0,
            color: 'yellow',
            height: 50,
            width: 50,
        };
        return result;
    }
}