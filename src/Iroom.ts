import { Ifurniture } from './Ifurniture';

export interface Iroom{
    name: string;
    color: string;
    points: string;
    furnitures: Array<Ifurniture>;
}