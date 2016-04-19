import { Ifurniture } from './Ifurniture';

export interface Iroom{
    name: string;
    color: string;
    points: Array<[number, number]>;
    furnitures: Array<Ifurniture>;
    x: number;
    y: number;
}