import { plan } from './plan';
import {Iroom} from './models/Iroom';
import {Imodel} from './models/Imodel';
import {Ifurniture} from './models/Ifurniture';
import { furnitureContextual } from './components/furnitureContextual';
import { menu } from './components/menu';
import { dataService } from './services/dataService';
// import { furnitureProperties } from './components/furnitureProperties';

export class app {
    private _selectedRoom: Iroom;
    private _plan: plan;
    constructor(containerId: string) {
        var p = new plan(containerId);

        var fc = new furnitureContextual('contextual');
        p.dispatch()
            .on('roomclicked', (d: Iroom) => {
                this._selectedRoom = d;
                fc.update(d.furnitures);
                fc.show();
            })
            .on('furnitureclicked', (d: Ifurniture) => {
                console.log(d);
                // furnitureProperties.render(d);
            });

        fc.dispatch()
            .on('add', (d) => {
                this.furnitureAdded(d);
            });

        var m = new menu('menu');
        m.dispatch()
            .on('itemClick', (d) => {
                p.render(d.rooms);
                fc.hide();
            });

        var service = new dataService();
        service.read('rooms')
            .then(data => {
                m.update(data.floors);
                p.render(data.floors[0].rooms);
                fc.hide();
            });
        this._plan = p;
    }

    furnitureAdded(d: Ifurniture): void {
        if (this._selectedRoom) {
            this._selectedRoom.furnitures.push(d);
            var selection = d3.select('#' + this._selectedRoom.name)
                .select('g.furnitures')
                .selectAll('.furniture')
                .data(this._selectedRoom.furnitures);
            this._plan.updateFurnitures(selection);
        }
    }
}
