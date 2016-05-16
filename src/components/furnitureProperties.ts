import d3 from 'd3';
import { Ifurniture } from '../models/Ifurniture';

export class furnitureProperties {
    static render(d: Ifurniture): void {
        var form = d3.select('form');
        furnitureProperties.renderField(form, 'Name', 'text', d.name);
        furnitureProperties.renderField(form, 'X', 'number', d.x);
        furnitureProperties.renderField(form, 'Y', 'number', d.y);
        // form.append('div')
        //     .classed('form-group', true);
        // form.append('label')
        //     .text('Name');
        // form.append('input')
        //     .classed('form-control', true)
        //     .attr('type', 'text')
        //     .attr('value', d.name);
    }

    private static renderField(selection: d3.Selection<any>, label: string, type: string, value: any): void {
        selection.append('div')
            .classed('form-group', true);
        selection.append('label')
            .text(label);
        selection.append('input')
            .classed('form-control', true)
            .attr('type', type)
            .attr('value', value);
    }
}