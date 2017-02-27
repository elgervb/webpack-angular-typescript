import * as angular from 'angular';
import { HelloWorldComponent } from './helloworldcomponent';

angular.module('helloworld', [])
    .component('helloWorld', new HelloWorldComponent());
