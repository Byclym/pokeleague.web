import { Item } from "./Item";

export class SlotBackpack {

    constructor(
        private item: Item,
        private count: number= 1
    ){
    }

    public getCount(): number { return this.count }
    public getItem(): Item { return this.item }
    public getItemName(): string { return this.item.getName() }

    public fill(number: number= 1): void { this.count = this.count + number }
    public use(number: number= 1): void { this.count = this.count - number }
}