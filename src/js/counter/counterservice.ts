
export interface ICounterService {
    count(): number;
    decrease(): number;
    increase(): number;
}
/**
 * Counter service: keeps track of your counts
 */
export class CounterService implements ICounterService {
    private value: number = 0;

    public count(): number {
        return this.value;
    }
    /**
     * Decreases the counter by one
     *
     * @return {number}
     */
    public decrease(): number {
        return this.value > 0 ? --this.value : this.value;
    }
    /**
     * Increases the counter by one
     *
     * @return {number}
     */
    public increase(): number {
        return  ++this.value;
    }
}
