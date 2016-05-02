import { plan } from './plan';
import { groundFloor } from './groundFloor';
import {Iroom} from './Iroom';
import {Imodel} from './Imodel';

export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);
        var gf = new groundFloor();
        var floorRooms = gf.createGroundFloor();
        // this._plan.render(floorRooms);
        d3.json('rooms.json', (error: any, data: Imodel) => {
            if (error) {
                console.error(error);
            }
            else {
                data.floors[0].rooms = floorRooms;
                this.buildMenu(data);
                // this._plan.render(data.floors[1].rooms);
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
            });
    }

}
