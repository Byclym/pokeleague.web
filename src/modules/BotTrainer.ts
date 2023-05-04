import TrainerInterface from './interface/TrainerInterface';
import { TrainerData } from "./TrainerList";
import Pokemon from './Pokemon';

export default class BotTrainer implements TrainerInterface {
    name: string;
    pokemons: Pokemon[];
  
    constructor(trainer: TrainerData)
    {
        this.name = trainer.name;
        this.pokemons = trainer.pokemons;
    }

    public addPokemon(pokemon: Pokemon): void
    {
        this.pokemons.push(pokemon);
    }
}