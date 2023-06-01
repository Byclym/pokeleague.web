import TrainerInterface from './interface/TrainerInterface';
import { BotTrainerData } from "./TrainerList";
import Pokemon from './Pokemon';
import { getPokemonByName } from './manager/PokemonManager';

export default class BotTrainer implements TrainerInterface {
    private name: string;
    private pokemons: Pokemon[];
  
    constructor(
        trainer: BotTrainerData
    ){
        this.name = trainer.name;
        this.pokemons = [];

        const pokemonToAdd = this.getRandomPokemonList(trainer.pokemons, 10, 3);

        pokemonToAdd.forEach(pokemonAv => {
            this.pokemons.push(
                new Pokemon(
                    getPokemonByName(pokemonAv.pokemon.name),
                    10
                )
            )}
        );

    }

    public getName(): string { return this.name }
    public getPokemons(): Pokemon[] { return this.pokemons }

    public addPokemon(pokemon: Pokemon): void
    {
        this.pokemons.push(pokemon);
    }

    private getRandomPokemonList(team: any[], level: number, x: number): any 
    {
        const availablePokemons = team
          .filter(pokemon => pokemon.levelMin < level)
          .filter(pokemon => pokemon.levelMax > level)

        return this.shuffleArray(availablePokemons, x);
    }

    private shuffleArray<T>(array: T[], x: number): T[] 
    {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0, x);
    }
    
      
}