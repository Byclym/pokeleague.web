import TrainerInterface from './interface/TrainerInterface';
import { TrainerData } from "./TrainerList";
import Pokemon from './Pokemon';
import { PlayerTrainerType } from './TrainerType';

export default class PlayerTrainer implements TrainerInterface {
    name: string;
    pokemons: Pokemon[];
    type: PlayerTrainerType[];
  
    constructor(trainer: TrainerData)
    {
        this.name = trainer.name;
        this.pokemons = trainer.pokemons;
        this.type = trainer.type;
    }

    public addPokemon(pokemon: Pokemon): void
    {
        this.pokemons.push(pokemon);
    }
}