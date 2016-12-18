import * as angular from 'angular';

class HelloWorldController implements ng.IController {}

/**
 * Hello World component
 */
class HelloWorldComponent implements ng.IComponentOptions {

    public controller: any = HelloWorldController;
    public template: string = `<h1>Hello {{::$ctrl.name}}</h1>`;
    public bindings: {[prop: string]: string}  = {
        name: '<'
    };

    constructor(private $name: string = 'World') {}
}

angular.module('app', [])
    .component('helloWorld', new HelloWorldComponent());

angular.bootstrap(document, ['app'], {
    strictDi: true
});
