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
}