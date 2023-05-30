import PlayerTrainer from "./PlayerTrainer";
import { Backpack } from "./Backpack";
import { Plateau, Town } from "./City";
import { getRandomTrainer } from "./TrainerList";
import BotTrainer from "./BotTrainer";
import Pokemon from "./Pokemon";

export default class Game {
    bagpack: Backpack;
    day: number;
    money: number;
    period: string | null;
    plateau: Plateau;
    player: PlayerTrainer;
    towns: Town[];
    weather: string | null;
    challengers: any[];
    pc: Pokemon[];

    
    
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
        this.challengers= [];
        this.pc= [];
    }

    public nextDay(): void
    {
        this.day++;
        this.challengerUp();
        this.newChallenger();
    }

    private newChallenger(): void {
        this.challengers.push({
            'trainer': getRandomTrainer(),
            'step': 0,
            'toFight': true,
            'undefeated': true,
        })
    }

    private challengerUp(): void {
        this.challengers.forEach(aChallenger => {

            if(aChallenger.undefeated) {
                aChallenger.step++;
                aChallenger.toFight = true;

            }
        });
    }

    public ifCanNextPhase(): boolean
    {
        for(let x= 0; x< 13; x= x+1 ) {
            if (this.ifChallengerHere(x)) return false;
        }
        return true;
    }

    public ifChallengerHere(level: number): boolean
    {
        return this.challengers.some(challenger => challenger.step === level && challenger.toFight === true && challenger.undefeated === true);
    }

    public getChallengerByLevel(level: number): BotTrainer | null
    {
        return this.challengers.find((trainer) => trainer.step == level && trainer.undefeated === true);
        
    }

    public getOpponentChallenger(level: number): PlayerTrainer | null
    {
        switch (level) {
            case 0: return this.towns[0].gym;
            case 1: return this.towns[1].gym;
            case 2: return this.towns[2].gym;
            case 3: return this.towns[3].gym;
            case 4: return this.towns[4].gym;
            case 5: return this.towns[5].gym;
            case 6: return this.towns[6].gym;
            case 7: return this.towns[7].gym;
            case 8: return this.plateau.elite[0];
            case 9: return this.plateau.elite[1];
            case 10: return this.plateau.elite[2];
            case 11: return this.plateau.elite[3];
            case 12: return this.player;
            default: return null;
        }
    }

    public addPokemonToPC(pokemon: Pokemon): void
    {
        this.pc.push(pokemon);
    }
}