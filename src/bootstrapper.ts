import angular from 'angular';
import { app } from './app';
new app('container');
import { furnitureProperties } from './components/furnitureProperties/furnitureProperties.component';


// angular bootstrapping
angular.module('app', [])
    .component('furnitureProperties', new furnitureProperties());



angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});
