import { plan } from './plan';
import { groundFloor } from './groundFloor';
import {firstFloor} from './firstFloor';
export class app {
    private _plan: plan;
    constructor(containerId: string) {
        this._plan = new plan(containerId);
        // var gf = new groundFloor();
        // this._plan.render(gf.createGroundFloor());

        var floor = new firstFloor();
        this._plan.render(floor.getRooms());
    }

}
