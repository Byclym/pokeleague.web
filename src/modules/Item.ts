export class Item {

    constructor(
        private name: string
    ){
    }

    public getName(): string { return this.name }

}

export class EvolutionItem extends Item{

    constructor(
        name: string
    ){
        super(name);
    }

}

export class BallItem extends Item{

    constructor(
        name: string,
        private catchRate: number)
    {
        super(name);
    }

    public getCatchRate(): number { return this.catchRate }
}
