import { Iroom } from '../../models/Iroom';
import { Ifurniture } from '../../models/Ifurniture';
export class roomPropertiesComponent implements angular.IComponentOptions {
    templateUrl = 'components/roomProperties/roomProperties.html';
    controller = roomPropertiesComponentController;
    bindings = {
        selected: '=',
        selectedFurniture: '='
    };
}

class roomPropertiesComponentController {
    selected: Iroom;
    selectedFurniture: Ifurniture;

    static $inject = [];
    constructor() {

    }
    $onInit() {
    }

    add() {
        var newFurniture = {
            name: '',
            color: '',
            height: 50,
            width: 50,
            x: 0,
            y: 0
        };
        this.selected.furnitures.push(newFurniture);
        this.selectedFurniture = newFurniture;
    }
}
