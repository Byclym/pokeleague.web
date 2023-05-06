export class Item {

    name: string;

    constructor(name: string)
    {
        this.name = name;
    }

}

export class EvolutionItem extends Item{

    constructor(name: string)
    {
        super(name);
    }

}

export class BallItem extends Item{

    catchRate: number;

    constructor(name: string, catchRate: number)
    {
        super(name);

        this.catchRate = catchRate;
    }

}

export const ItemList: { [name: string]: Item } = {};

ItemList.FireStone      = new EvolutionItem('Fire Stone');
ItemList.LeafStone      = new EvolutionItem('Leaf Stone');
ItemList.LinkingCord    = new EvolutionItem('Linking Cord');
ItemList.MoonStone      = new EvolutionItem('Moon Stone');
ItemList.ThunderStone   = new EvolutionItem('Thunder Stone');
ItemList.WaterStone     = new EvolutionItem('Water Stone');

ItemList.GreatBall      = new BallItem('Great Ball', 1.5);
ItemList.PokeBall       = new BallItem('Poké Ball', 1);
ItemList.UltraBall      = new BallItem('Ultra Ball', 2);

