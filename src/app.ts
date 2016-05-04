import { plan } from './plan';
import {Iroom} from './Iroom';
import {Imodel} from './Imodel';
import { furnitureContextual } from './furnitureContextual';
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
        var service = new dataService();
        service.read('rooms').then(data => {
            this.buildMenu(data);
        })
    }

    private buildMenu(data: Imodel) {
        d3.select('#menu')
            .selectAll('div')
            .data(data.floors)
            .enter()
            .append('div')
            .classed('menu-item', true)
            .on('click', (d, i) => {
                this._plan.render(d.rooms);
            })
            .text(d => d.name);
        this._plan.render(data.floors[0].rooms);
    }

}
