import { PokemonData } from "./PokemonList";
import { getTypeEffectiveness } from './manager/TypeManager'

export default class Pokemon {
    pokemon: PokemonData
    level: number;
  
    constructor(pokemon: PokemonData, level: number)
    {
        this.pokemon = pokemon;
        this.level = level;
    }

    public getInitialScore(): number
    {
        return (this.pokemon.hitpoints
            + this.pokemon.attack
            + this.pokemon.specialAttack
            + this.pokemon.defense
            + this.pokemon.specialDefense
            + this.pokemon.speed) * (this.level / 10);
    }

    public getScoreAgainstPokemon(opponent: Pokemon): number
    {
        return this.getInitialScore() * getTypeEffectiveness(this.pokemon.type,opponent.pokemon.type);
    }

    public getName(): string { return this.pokemon.name }
}