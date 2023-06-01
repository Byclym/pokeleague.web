import { BallItem, EvolutionItem, Item } from "./Item";

export const ItemList: { [name: string]: Item } = {};

ItemList.FireStone      = new EvolutionItem('Fire Stone');
ItemList.LeafStone      = new EvolutionItem('Leaf Stone');
ItemList.LinkingCord    = new EvolutionItem('Linking Cord');
ItemList.MoonStone      = new EvolutionItem('Moon Stone');
ItemList.ThunderStone   = new EvolutionItem('Thunder Stone');
ItemList.WaterStone     = new EvolutionItem('Water Stone');
ItemList.SunStone       = new EvolutionItem('Sun Stone');
ItemList.SootheBell     = new EvolutionItem('Soothe Bell');
ItemList.KingsRock      = new EvolutionItem('King\'s Rock');
ItemList.DragonScale    = new EvolutionItem('Dragon Scale');
ItemList.MetalCoat      = new EvolutionItem('Metal Coat');
ItemList.Upgrade        = new EvolutionItem('Upgrade');

ItemList.GreatBall      = new BallItem('Great Ball', 1.5);
ItemList.PokeBall       = new BallItem('Poké Ball', 1);
ItemList.UltraBall      = new BallItem('Ultra Ball', 2);
