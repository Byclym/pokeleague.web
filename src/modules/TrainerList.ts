import Pokemon from "./Pokemon";
import PokemonType from "./PokemonType";
import { PlayerTrainerType } from "./TrainerType";
import { getPokemonById } from './manager/PokemonManager';

function createChampionArray<T extends readonly TrainerData[] & Array<{ name: V }>, V extends string>(...args: T) {
    return args;
}

export type TrainerData = {
    name: string;
    type: PlayerTrainerType[];
    pokemons: Pokemon[];
}

export const PlayerTrainerList = createChampionArray(
    {
        'id': 'player',
        'name': 'Player',
        'type': PlayerTrainerType.Player,
        'pokemonType': null,
        'pokemons': [
            new Pokemon(getPokemonById(1), 10),
            new Pokemon(getPokemonById(4), 10),
            new Pokemon(getPokemonById(7), 10)
        ]
    },
    {
        'id': 'brock',
        'name': 'Brock',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Rock,
        'pokemons': [
            new Pokemon(getPokemonById(74), 10),
            new Pokemon(getPokemonById(74), 10),
            new Pokemon(getPokemonById(95), 10)
        ]
    }
)

export const BotTrainerList = createChampionArray(
    {
        'id': 'brock',
        'name': 'Brock',
        'pokemonType': PokemonType.Rock,
        'pokemons': [
            new Pokemon(getPokemonById(74), 10),
            new Pokemon(getPokemonById(74), 10),
            new Pokemon(getPokemonById(95), 10)
        ]
    }
)