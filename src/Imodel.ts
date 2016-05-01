import { Iroom } from './Iroom';

export interface Imodel{
    floors: Array<{
        name: string;
        rooms: Array<Iroom>;
    }>;
}