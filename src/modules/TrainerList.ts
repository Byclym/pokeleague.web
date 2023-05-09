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
        'id': 'lance',
        'name': 'Lance',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Dragon,
        'pokemons': [
            new Pokemon(getPokemonById(147), 10),
            new Pokemon(getPokemonById(147), 10),
            new Pokemon(getPokemonById(142), 10)
        ]
    },
    {
        'id': 'agatha',
        'name': 'Agatha',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Ghost,
        'pokemons': [
            new Pokemon(getPokemonById(23), 10),
            new Pokemon(getPokemonById(92), 10),
            new Pokemon(getPokemonById(92), 10)
        ]
    },
    {
        'id': 'bruno',
        'name': 'Bruno',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Fighting,
        'pokemons': [
            new Pokemon(getPokemonById(66), 10),
            new Pokemon(getPokemonById(106), 10),
            new Pokemon(getPokemonById(107), 10)
        ]
    },
    {
        'id': 'lorelei',
        'name': 'Lorelei',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Ice,
        'pokemons': [
            new Pokemon(getPokemonById(86), 10),
            new Pokemon(getPokemonById(124), 10),
            new Pokemon(getPokemonById(131), 10)
        ]
    },
    {
        'id': 'giovanni',
        'name': 'Giovanni',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Ground,
        'pokemons': [
            new Pokemon(getPokemonById(29), 10),
            new Pokemon(getPokemonById(32), 10),
            new Pokemon(getPokemonById(111), 10)
        ]
    },
    {
        'id': 'blaine',
        'name': 'Blaine',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Fire,
        'pokemons': [
            new Pokemon(getPokemonById(77), 10),
            new Pokemon(getPokemonById(58), 10),
            new Pokemon(getPokemonById(126), 10)
        ]
    },
    {
        'id': 'sabrina',
        'name': 'Sabrina',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Psychic,
        'pokemons': [
            new Pokemon(getPokemonById(63), 10),
            new Pokemon(getPokemonById(63), 10),
            new Pokemon(getPokemonById(122), 10)
        ]
    },
    {
        'id': 'koga',
        'name': 'Koga',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Psychic,
        'pokemons': [
            new Pokemon(getPokemonById(48), 10),
            new Pokemon(getPokemonById(88), 10),
            new Pokemon(getPokemonById(109), 10)
        ]
    },
    {
        'id': 'erika',
        'name': 'Erika',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Grass,
        'pokemons': [
            new Pokemon(getPokemonById(69), 10),
            new Pokemon(getPokemonById(43), 10),
            new Pokemon(getPokemonById(114), 10)
        ]
    },
    {
        'id': 'ltsurge',
        'name': 'Lt. Surge',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Electric,
        'pokemons': [
            new Pokemon(getPokemonById(25), 10),
            new Pokemon(getPokemonById(26), 10),
            new Pokemon(getPokemonById(81), 10)
        ]
    },
    {
        'id': 'misty',
        'name': 'Misty',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Water,
        'pokemons': [
            new Pokemon(getPokemonById(116), 10),
            new Pokemon(getPokemonById(118), 10),
            new Pokemon(getPokemonById(120), 10)
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
    },
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