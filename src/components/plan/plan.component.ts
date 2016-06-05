import d3 from 'd3';
import { plan } from './plan';
import { Iroom } from '../../models/Iroom';
import { Ifurniture } from '../../models/Ifurniture';
var p: plan;
export class planComponent implements angular.IComponentOptions {
    template = ($element: angular.IAugmentedJQuery) => {
        var width = 1024;
        var height = 768;
        var sel = d3.select($element[0])
            .append('svg')
            .attr({
                width: width,
                height: height
            });
        p = new plan(sel, width, height);
    };
    controller = planComponentController;
    bindings = {
        'selected': '=',
        'selectedFurniture': '=',
        rooms: '='
    };
}

class planComponentController {
    rooms: Iroom[];
    selected: Iroom;
    selectedFurniture: Ifurniture;
    static $inject = ['$scope'];
    constructor($scope: angular.IScope) {
        $scope.$watch(() => this.rooms, () => {
            console.log(this.rooms);
            if (this.rooms) {
                p.render(this.rooms);
            }
        }, true);
        
        p.dispatch()
            .on('roomclicked', (d: Iroom) => {
                this.selected = d;
                $scope.$apply();
            })
            .on('furnitureclicked', (d: Ifurniture) => {
                this.selectedFurniture = d;
                $scope.$apply();
            });
    }
}
