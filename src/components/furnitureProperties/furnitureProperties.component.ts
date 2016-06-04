import { Ifurniture } from '../../models/Ifurniture';
export class furnitureProperties implements angular.IComponentOptions {
    templateUrl = 'components/furnitureProperties/furnitureProperties.html';
    controller = furniturePropertiesController;
    bindings = {
        'selected': '=?'
    };
}

class furniturePropertiesController {
    selected: Ifurniture;
    constructor() {
        this.selected = {
            color: 'red',
            height: 50,
            width: 50,
            name:
            'michel',
            x: 0,
            y: 0
        }
    }
}
