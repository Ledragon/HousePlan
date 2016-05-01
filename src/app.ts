import { plan } from './plan';
import { groundFloor } from './groundFloor';
import {Iroom} from './Iroom';
export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);
        // var gf = new groundFloor();
        // this._plan.render(gf.createGroundFloor());
        d3.json('rooms.json', (error, data) => {
            if (error) {
                console.error(error);
            }
            else {
                console.log(data.floors[1]);
                this._plan.render(data.floors[1].rooms);
            }
        })

    }

}
