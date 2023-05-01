import PokemonType from "./PokemonType";
import { PokemonData } from "./PokemonList";
import { getTypeEffectiveness } from './manager/TypeManager'

export default class Pokemon {
    id: number;
    name: string;
    catchRate: number;
    type: PokemonType[];
    hitpoints: number;
    attack: number;
    specialAttack: number;
    defense: number;
    specialDefense: number;
    speed: number;
    level: number;
  
    constructor(pokemon: PokemonData, level: number)
    {
        this.id = pokemon.id;
        this.name = pokemon.name;
        this.catchRate = pokemon.catchRate;
        this.type = pokemon.type;
        this.hitpoints = pokemon.hitpoints;
        this.attack = pokemon.attack;
        this.specialAttack = pokemon.specialAttack;
        this.defense = pokemon.defense;
        this.specialDefense = pokemon.specialDefense;
        this.speed = pokemon.speed;
        this.level = level;
    }

    public getInitialScore(): number
    {
        return (this.hitpoints
            + this.attack
            + this.specialAttack
            + this.defense
            + this.specialDefense
            + this.speed) * (this.level / 10);
    }

    public getScoreAgainstPokemon(opponent: Pokemon): number
    {
        return this.getInitialScore() * getTypeEffectiveness(this.type,opponent.type);
    }
}