import {Imodel} from '../models/Imodel';

export class dataService {
    static $inject = ['$http'];
    constructor(private _$http:angular.IHttpService) {
        
    }
    read(file: string): angular.IPromise<{ data:Imodel }> {
        // return new Promise<Imodel>((resolve, reject) => {
            return this._$http.get(`/src/data/${file}.json`);
            // d3.json(`/src/data/${file}.json`, (error: any, data: Imodel) => {
            //     if (error) {
            //         console.error(error);
            //         reject(error);
            //     }
            //     else {
            //         resolve(data);
            //     }
            // });
    }
}