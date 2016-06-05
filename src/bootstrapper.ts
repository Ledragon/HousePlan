import angular from 'angular';
// import { app } from './app';
// new app('container');
import { containerComponent } from './components/container/container.component';
import { furnitureProperties } from './components/furnitureProperties/furnitureProperties.component';
import { roomPropertiesComponent } from './components/roomProperties/roomProperties.component';
import { planComponent } from './components/plan/plan.component';
import { dataService } from './services/dataService';


// angular bootstrapping
angular.module('app', [])
    .component('container', new containerComponent())
    .component('furnitureProperties', new furnitureProperties())
    .component('roomProperties', new roomPropertiesComponent())
    .component('plan', new planComponent())
    .service('dataService', dataService);



angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
