import d3 from 'd3';
import { Iroom } from '../../models/Iroom';
export class containerComponent implements angular.IComponentOptions {
    templateUrl='components/container/container.html'
    controller = containerComponentController;
}

class containerComponentController {
    selected: Iroom;
    rooms: Iroom[];
    constructor() {
    }
}
