import { BallItem } from "./Item";
import { SlotBackpack } from "./SlotBackpack";


export class Backpack {
    slots: SlotBackpack[];

    constructor(
    ){
        this.slots = [];
    }

    public getBalls() {
        return this.slots.filter((slot: SlotBackpack) => {
            return slot.item instanceof BallItem;
        });
    }
}