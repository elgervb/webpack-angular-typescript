import * as angular from 'angular';
import { CounterComponent } from './countercomponent';
import { CounterService } from './counterservice';

angular.module('counter', [])
    .component('counter', new CounterComponent())
    .service('CounterService', CounterService);
