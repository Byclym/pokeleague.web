import PokemonType from "./PokemonType";
import { PokemonData } from "./PokemonList";

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
  
    constructor(pokemon: PokemonData)
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
    }

    public getInitialScore(): number
    {
        return this.hitpoints
            + this.attack
            + this.specialAttack
            + this.defense
            + this.specialDefense
            + this.speed;
    }
}