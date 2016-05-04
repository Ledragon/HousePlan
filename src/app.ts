import { plan } from './plan';
import {Iroom} from './models/Iroom';
import {Imodel} from './models/Imodel';
import { furnitureContextual } from './components/furnitureContextual';
import { menu } from './components/menu';
import { dataService } from './services/dataService';

export class app {
    private _plan: plan;
    constructor(containerId: string) {

        this._plan = new plan(containerId);

        var fc = new furnitureContextual('contextual');
        this._plan.dispatch()
            .on('roomclicked', (d: Iroom) => {
                fc.update(d.furnitures);
            });

        var m = new menu('menu');
        m.dispatch()
            .on('itemClick', (d) => {
                this._plan.render(d.rooms);
            });
        
        var service = new dataService();
        service.read('rooms')
            .then(data => {
                m.update(data.floors);
                this._plan.render(data.floors[0].rooms);
            });
    }
}
