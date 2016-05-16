import { Ifurniture } from '../models/Ifurniture';
import { furnitureManagement } from '../furnitureManagement';

interface IfurnitureContextualDispacth extends d3.Dispatch {
    add: (d: Ifurniture) => void;
}

export class furnitureContextual {

    private _group: d3.Selection<Ifurniture>;
    private _furnitures: Array<Ifurniture>;
    private _dispatch: IfurnitureContextualDispacth;

    constructor(containerId: string) {
        var contextual = d3.select('#' + containerId);
        var form = contextual.append('form').style('visibility', 'hidden');
        form.append('button')
            .attr({
                'type': 'button'
            })
            .on('click', () => {
                var f = furnitureManagement.create();
                this._furnitures.push(f);
                this.update(this._furnitures);
                this._dispatch.add(f);
            })
            .text('New');
        this._group = form;
        this._dispatch = <IfurnitureContextualDispacth>d3.dispatch('add');
    }

    update(furnitures: Array<Ifurniture>) {
        this._furnitures = furnitures;
        var dataBound = this._group
            .selectAll('.furniture')
            .data(furnitures);

        dataBound.exit()
            .remove();

        var divs = dataBound.enter()
            .insert('div', 'button')
            .classed('furniture form-group', true);
        divs.append('label')
            .text('Name');
        divs.append('input')
            .classed('form-control', true);

        dataBound.selectAll('.form-control')
            .attr({
                'type': 'text',
                'value': d => d.name
            });
    }

    show(): void {
        this._group.style('visibility', 'visible');
    }

    hide(): void {
        this._group.style('visibility', 'hidden');
    }

    dispatch(): d3.Dispatch {
        return this._dispatch;
    }
}