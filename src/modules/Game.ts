import PlayerTrainer from "./PlayerTrainer";
import { Backpack } from "./Backpack";
import { Plateau, Town } from "./City";

export default class Game {
    bagpack: Backpack;
    day: number;
    money: number;
    period: string | null;
    plateau: Plateau;
    player: PlayerTrainer;
    towns: Town[];
    weather: string | null;

    
    
    constructor(player: PlayerTrainer, plateau: Plateau, towns: Town[],)
    {
        this.day= 0;
        this.player= player;
        this.bagpack= new Backpack();
        this.money= 1000;
        this.period= null;
        this.weather= null;
        this.plateau= plateau;
        this.towns= towns;
    }

}