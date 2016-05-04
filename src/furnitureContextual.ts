import { Ifurniture } from './Ifurniture';
export class furnitureContextual {
    private _group: d3.Selection<Ifurniture>;
    private _furnitures: Array<Ifurniture>;
    constructor(containerId: string) {
        var contextual = d3.select('#' + containerId);
        var form = contextual.append('form');
        form.append('button')
            .on('click', () => {

            })
            .text('New');
        this._group = form;
    }

    update(furnitures: Array<Ifurniture>) {
        this._furnitures = furnitures;
        var dataBound = this._group
            .selectAll('.furniture')
            .data(furnitures);

        dataBound.exit()
            .remove();

        var divs = dataBound.enter()
            .insert('div','button')
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
}