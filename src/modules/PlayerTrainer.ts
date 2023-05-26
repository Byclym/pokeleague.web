import TrainerInterface from './interface/TrainerInterface';
import { PlayerTrainerData } from "./TrainerList";
import Pokemon from './Pokemon';
import { PlayerTrainerType } from './TrainerType';

export default class PlayerTrainer implements TrainerInterface {
    name: string;
    pokemons: Pokemon[];
    type: PlayerTrainerType[];
    improvementPoint: Number= 0;
  
    constructor(trainer: PlayerTrainerData)
    {
        this.name = trainer.name;
        this.pokemons = trainer.pokemons;
        this.type = trainer.type;
    }

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