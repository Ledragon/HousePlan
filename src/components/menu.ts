import { Ifloor } from '../models/Ifloor';
export class menu {
    private _group: d3.Selection<any>;
    
    constructor(containerId: string) {
        this._group = d3.select('#' + containerId);
    }
    
    update(floors: Array<Ifloor>): void {
        this._group
            .selectAll('div')
            .data(floors)
            .enter()
            .append('div')
            .classed('menu-item', true)
            .on('click', (d, i) => {
                // this._plan.render(d.rooms);
            })
            .text(d => d.name);
    }
    
}