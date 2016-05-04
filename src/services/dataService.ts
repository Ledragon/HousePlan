import {Imodel} from '../models/Imodel';

export class dataService {
    read(file: string): Promise<Imodel> {
        return new Promise<Imodel>((resolve, reject) => {
            d3.json(`/src/data/${file}.json`, (error: any, data: Imodel) => {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}