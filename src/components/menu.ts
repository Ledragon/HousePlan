import { Ifloor } from '../models/Ifloor';

interface ImenuDispatch extends d3.Dispatch {
    itemClick: (d: Ifloor) => void;
}
export class menu {
    private _group: d3.Selection<any>;
    private _dispatch: ImenuDispatch;
    constructor(containerId: string) {
        this._group = d3.select('#' + containerId);
        this._dispatch = <ImenuDispatch>d3.dispatch('itemClick');
    }

    update(floors: Array<Ifloor>): void {
        this._group
            .selectAll('div')
            .data(floors)
            .enter()
            .append('div')
            .classed('menu-item', true)
            .on('click', (d, i) => {
                this._dispatch.itemClick(d);
            })
            .text(d => d.name);
    }


    dispatch(): d3.Dispatch {
        return this._dispatch;
    }
}