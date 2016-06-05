import d3 from 'd3';
import { Iroom } from '../../models/Iroom';
import { Imodel } from '../../models/Imodel';
import { dataService } from '../../services/dataService';

export class containerComponent implements angular.IComponentOptions {
    templateUrl = 'components/container/container.html'
    controller = containerComponentController;
}

class containerComponentController {
    selected: Iroom;
    rooms: Iroom[];
    private _model: Imodel;
    static $inject = ['dataService'];

    constructor(private _dataService: dataService) {
    }
    
    $onInit() {
        this._dataService.read('rooms')
            .then(data => {
                this._model = data.data;
                this.rooms = data.data.floors[0].rooms;
            });
    }
}
