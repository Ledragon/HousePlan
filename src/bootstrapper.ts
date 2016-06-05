import angular from 'angular';
import { app } from './app';
new app('container');
import { furnitureProperties } from './components/furnitureProperties/furnitureProperties.component';
import { planComponent } from './components/plan/plan.component';
import { dataService } from './services/dataService';


// angular bootstrapping
angular.module('app', [])
    .component('furnitureProperties', new furnitureProperties())
    .component('plan', new planComponent())
    .service('dataService', dataService);



angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
