import Pokemon from "./Pokemon";
import PokemonType from "./PokemonType";
import { PlayerTrainerType } from "./TrainerType";
import { getPokemonById, getPokemonByName } from './manager/PokemonManager';

function createPlayerTrainerArray<T extends readonly PlayerTrainerData[] & Array<{ name: V }>, V extends string>(...args: T) {
    return args;
}

function createBotTrainerArray<T extends readonly PlayerTrainerData[] & Array<{ name: V }>, V extends string>(...args: T) {
    return args;
}

export type PlayerTrainerData = {
    name: string;
    type: PlayerTrainerType[];
    pokemons: Pokemon[];
}

export type BotTrainerData = {
    name: string;
    type: PlayerTrainerType[];
    pokemons: {};
}

export const PlayerTrainerList = createPlayerTrainerArray(
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

export const BotTrainerList = createBotTrainerArray(
    {
        'id': 'grunt',
        'name': 'Grunt',
        'pokemons': [
            {pokemon: getPokemonByName('Rattata'), levelMin: 0, levelMax: 30},
            {pokemon: getPokemonByName('Raticate'), levelMin: 25, levelMax: 100},
            {pokemon: getPokemonByName('Sandshrew'), levelMin: 0, levelMax: 32},
            {pokemon: getPokemonByName('Sandslash'), levelMin: 27, levelMax: 100},
            {pokemon: getPokemonByName('Zubat'), levelMin: 0, levelMax: 32},
            {pokemon: getPokemonByName('Golbat'), levelMin: 27, levelMax: 100},
            {pokemon: getPokemonByName('Ekans'), levelMin: 0, levelMax: 32},
            {pokemon: getPokemonByName('Arbok'), levelMin: 27, levelMax: 100},
            {pokemon: getPokemonByName('Venonat'), levelMin: 0, levelMax: 41},
            {pokemon: getPokemonByName('Venomoth'), levelMin: 36, levelMax: 100},
            {pokemon: getPokemonByName('Grimer'), levelMin: 20, levelMax: 48},
            {pokemon: getPokemonByName('Muk'), levelMin: 43, levelMax: 100},
            {pokemon: getPokemonByName('Koffing'), levelMin: 0, levelMax: 45},
            {pokemon: getPokemonByName('Weezing'), levelMin: 40, levelMax: 100},
            {pokemon: getPokemonByName('Drowzee'), levelMin: 15, levelMax: 36},
            {pokemon: getPokemonByName('Hypno'), levelMin: 31, levelMax: 100},
            {pokemon: getPokemonByName('Drowzee'), levelMin: 15, levelMax: 38},
            {pokemon: getPokemonByName('Hypno'), levelMin: 33, levelMax: 100},
            {pokemon: getPokemonByName('Cubone'), levelMin: 15, levelMax: 38},
            {pokemon: getPokemonByName('Marowak'), levelMin: 33, levelMax: 100},
            {pokemon: getPokemonByName('Machop'), levelMin: 15, levelMax: 38},
            {pokemon: getPokemonByName('Machoke'), levelMin: 33, levelMax: 75},
            {pokemon: getPokemonByName('Machamp'), levelMin: 40, levelMax: 100},
        ]
    }
)