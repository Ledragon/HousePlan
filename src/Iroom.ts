import { Ifurniture } from './Ifurniture';

export interface Iroom{
    name: string;
    color: string;
    points: Array<[number, number]>;
    furnitures: Array<Ifurniture>;
    x: number;
    y: number;
    doors?: Array<{ cx: number, cy: number, size: number, startAngle: number, endAngle: number }>;
    walls?: Array<{ length: number, angle: number }>;
}