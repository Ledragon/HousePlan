import { plan } from './plan';
import {Iroom} from './Iroom';
import {Imodel} from './Imodel';

export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);
        
        // d3.json('rooms.json', (error: any, data: Imodel) => {
        d3.json('data/rooms.json', (error: any, data: Imodel) => {
            if (error) {
                console.error(error);
            }
            else {
                this.buildMenu(data);
            }
        });

        this._plan.dispatch()
            .on('roomclicked', (d: Iroom) => {
                this.showFurnitureList(d);
            });
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

    private showFurnitureList(room: Iroom) {
        var dataBound = d3.select('#contextual')
            .selectAll('.furniture')
            .data(room.furnitures);

        dataBound.exit()
            .remove();

        var divs = dataBound.enter()
            .append('div')
            .classed('form-group', true);
        divs.append('label')
            .text('Name');
        divs.append('input')
            .attr({
                'type': 'text',
                'value': d => d.name
            })
            .classed('form-control', true);
    }

}
