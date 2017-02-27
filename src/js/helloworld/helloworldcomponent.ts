class HelloWorldController implements ng.IController {}

/**
 * Hello World component
 */
export class HelloWorldComponent implements ng.IComponentOptions {

    public controller: any = HelloWorldController;
    public template: string = `<h1>Hello {{::$ctrl.name}}</h1>`;
    public bindings: {[prop: string]: string}  = {
        name: '<'
    };

    constructor(private $name: string = 'World') {}
}
