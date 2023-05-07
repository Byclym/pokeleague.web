import PlayerTrainer from "./PlayerTrainer";
import { Backpack } from "./Backpack";

export default class Game {
    player: PlayerTrainer;
    day: number;
    champions: PlayerTrainer[];
    bagpack: Backpack;
    money: number;
    
    
    constructor(player: PlayerTrainer)
    {
        this.day= 0;
        this.player= player;
        this.champions= [];
        this.bagpack= new Backpack();
        this.money= 1000;
        
    }

}