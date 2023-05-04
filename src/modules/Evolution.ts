import PokemonType from "./PokemonType";

export enum EvolutionType {
    'LevelEvolution',
    'ItemEvolution'
}

export type PokemonData = {
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
}

export type EvolutionData = {
    type: EvolutionType, 
    pokemonName: string,
    conditions: unknown[]
};