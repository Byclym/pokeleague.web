import TrainerInterface from './interface/TrainerInterface'
import Pokemon from './Pokemon';

export default class BotTrainer implements TrainerInterface {
    name: string;
    pokemons: Pokemon[];
  
    constructor(name: string) {
        this.name = name;
        this.pokemons = [];
    }

    public addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }
}