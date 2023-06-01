import { BallItem, Item } from "./Item";
import { SlotBackpack } from "./SlotBackpack";


export class Backpack {

    constructor(
        private slots: SlotBackpack[],
    ){
        this.slots = [];
    }

    public getSlots(): SlotBackpack[] { return this.slots }

    private getSlotByItem(item: Item): SlotBackpack|undefined
    {
        return this.getSlots().find((slot) => slot.getItem().getName() == item.getName());
    }

    public addItem(item: Item, count: number): void {

        var oSlot = this.getSlotByItem(item)
        
        if(oSlot) {
            oSlot.fill(count)
            return
        }
        this.slots.push(new SlotBackpack(item, count))
    }
    
    public getBalls()
    {
        return this.slots.filter((slot: SlotBackpack) => {
            return slot.getItem() instanceof BallItem;
        });
    }

    
}