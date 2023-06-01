import TrainerInterface from './interface/TrainerInterface';
import { PlayerTrainerData } from "./TrainerList";
import Pokemon from './Pokemon';
import { PlayerTrainerType } from './TrainerType';

export default class PlayerTrainer implements TrainerInterface {

    private name: string;
    private pokemons: Pokemon[];
    private type: PlayerTrainerType[];
  
    constructor(
        trainer: PlayerTrainerData,
        private improvementPoint: number= 0
    ){
        this.name = trainer.name;
        this.pokemons = trainer.pokemons;
        this.type = trainer.type;
    }

    public getName(): string { return this.name }
    public getPokemons(): Pokemon[] { return this.pokemons }
    public getType(): PlayerTrainerType[] { return this.type }
    public getImprovementPoint(): number { return this.improvementPoint }

    public addPokemon(pokemon: Pokemon): void
    {
        this.pokemons.push(pokemon);
    }

    public gainIP(): void
    {
        this.improvementPoint++;
    }

    public loseIP(): void
    {
        this.improvementPoint--;
    }
}