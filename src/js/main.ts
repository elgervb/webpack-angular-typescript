import * as angular from 'angular';
import './counter/counter';
import './helloworld/helloworld';

angular.module('app', ['helloworld', 'counter']);

angular.bootstrap(document, ['app'], {
    // strictDi: true
});
