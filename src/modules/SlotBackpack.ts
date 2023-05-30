import { Item } from "./Item";

export class SlotBackpack {
    item: Item;
    count: number;

    constructor(
        item: Item,
        count: number= 1
    ){
        this.item = item;
        this.count = count;
    }

    public getCount(): number { return this.count }
    public getItem(): Item { return this.item }
    public getItemName(): string { return this.item.name }
    public use(number: number= 1): void { this.count = this.count - number }
}