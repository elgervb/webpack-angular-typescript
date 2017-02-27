import { ICounterService } from './counterservice';

class CounterController implements ng.IController {
    constructor(private CounterService: ICounterService) {
        '@ngInject';
    }

    public count(): number {
        return this.CounterService.count();
    }

    public decrease(): number {
        return this.CounterService.decrease();
    }
    public increase(): number {
        return this.CounterService.increase();
    }
}

export class CounterComponent implements ng.IComponentOptions {
    public controller: any = CounterController;
    public template: string = ` <div class="counter">
        <button class="btn" ng-click="$ctrl.decrease()">-</button>
        <button class="btn" ng-click="$ctrl.increase()">+</button>
        <output class="count">{{$ctrl.count()}}</output>
    </div>`;
}
