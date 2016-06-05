import d3 from 'd3';
import { plan } from './plan';
import { dataService } from '../../services/dataService';
import { Iroom } from '../../models/Iroom';
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
        'selected': '='
    };
}

class planComponentController {
    selected: Iroom;
    static $inject = ['$scope','dataService'];
    constructor($scope:angular.IScope,private _dataService: dataService) {

        p.dispatch()
            .on('roomclicked', (d: Iroom) => {
                this.selected = d;
                $scope.$apply();
            });
    }
    $onInit() {
        this._dataService.read('rooms')
            .then(data => {
                p.render(data.floors[0].rooms);
            });
    }
}
