import { Ifurniture } from '../../models/Ifurniture';
export class furnitureProperties implements angular.IComponentOptions {
    templateUrl = 'components/furnitureProperties/furnitureProperties.html';
    controller = furniturePropertiesController;
    bindings = {
        'selected': '='
    };
}

class furniturePropertiesController {
    selected: Ifurniture;
    constructor() {
       
    }
}
