import BotTrainer from "./BotTrainer";
import Pokemon from "./Pokemon";
import PokemonType from "./PokemonType";
import { PlayerTrainerType } from "./TrainerType";
import { getPokemonByName } from './manager/PokemonManager';
import { getBotTrainerByName } from "./manager/TrainerManager";

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
            new Pokemon(getPokemonByName('Bulbasaur'), 10),
            new Pokemon(getPokemonByName('Charmander'), 10),
            new Pokemon(getPokemonByName('Squirtle'), 10)
        ]
    },
    {
        'id': 'lance',
        'name': 'Lance',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Dragon,
        'pokemons': [
            new Pokemon(getPokemonByName('Dratini'), 10),
            new Pokemon(getPokemonByName('Dratini'), 10),
            new Pokemon(getPokemonByName('Aerodactyl'), 10)
        ]
    },
    {
        'id': 'agatha',
        'name': 'Agatha',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Ghost,
        'pokemons': [
            new Pokemon(getPokemonByName('Ekans'), 10),
            new Pokemon(getPokemonByName('Gastly'), 10),
            new Pokemon(getPokemonByName('Gastly'), 10)
        ]
    },
    {
        'id': 'bruno',
        'name': 'Bruno',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Fighting,
        'pokemons': [
            new Pokemon(getPokemonByName('Machop'), 10),
            new Pokemon(getPokemonByName('Hitmonlee'), 10),
            new Pokemon(getPokemonByName('Hitmonchan'), 10)
        ]
    },
    {
        'id': 'lorelei',
        'name': 'Lorelei',
        'type': PlayerTrainerType.Elite,
        'pokemonType': PokemonType.Ice,
        'pokemons': [
            new Pokemon(getPokemonByName('Seel'), 10),
            new Pokemon(getPokemonByName('Jynx'), 10),
            new Pokemon(getPokemonByName('Lapras'), 10)
        ]
    },
    {
        'id': 'giovanni',
        'name': 'Giovanni',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Ground,
        'pokemons': [
            new Pokemon(getPokemonByName('Nidoran♀'), 10),
            new Pokemon(getPokemonByName('Nidoran♂'), 10),
            new Pokemon(getPokemonByName('Rhyhorn'), 10)
        ]
    },
    {
        'id': 'blaine',
        'name': 'Blaine',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Fire,
        'pokemons': [
            new Pokemon(getPokemonByName('Ponyta'), 10),
            new Pokemon(getPokemonByName('Growlithe'), 10),
            new Pokemon(getPokemonByName('Magmar'), 10)
        ]
    },
    {
        'id': 'sabrina',
        'name': 'Sabrina',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Psychic,
        'pokemons': [
            new Pokemon(getPokemonByName('Abra'), 10),
            new Pokemon(getPokemonByName('Abra'), 10),
            new Pokemon(getPokemonByName('Mr. Mime'), 10)
        ]
    },
    {
        'id': 'koga',
        'name': 'Koga',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Psychic,
        'pokemons': [
            new Pokemon(getPokemonByName('Venonat'), 10),
            new Pokemon(getPokemonByName('Grimer'), 10),
            new Pokemon(getPokemonByName('Koffing'), 10)
        ]
    },
    {
        'id': 'erika',
        'name': 'Erika',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Grass,
        'pokemons': [
            new Pokemon(getPokemonByName('Bellsprout'), 10),
            new Pokemon(getPokemonByName('Oddish'), 10),
            new Pokemon(getPokemonByName('Tangela'), 10)
        ]
    },
    {
        'id': 'ltsurge',
        'name': 'Lt. Surge',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Electric,
        'pokemons': [
            new Pokemon(getPokemonByName('Pikachu'), 10),
            new Pokemon(getPokemonByName('Raichu'), 10),
            new Pokemon(getPokemonByName('Magnemite'), 10)
        ]
    },
    {
        'id': 'misty',
        'name': 'Misty',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Water,
        'pokemons': [
            new Pokemon(getPokemonByName('Horsea'), 10),
            new Pokemon(getPokemonByName('Goldeen'), 10),
            new Pokemon(getPokemonByName('Staryu'), 10)
        ]
    },
    {
        'id': 'brock',
        'name': 'Brock',
        'type': PlayerTrainerType.GymLeader,
        'pokemonType': PokemonType.Rock,
        'pokemons': [
            new Pokemon(getPokemonByName('Geodude'), 10),
            new Pokemon(getPokemonByName('Geodude'), 10),
            new Pokemon(getPokemonByName('Onix'), 10)
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
    },
    {
        'id': 'rocker',
        'name': 'Rocker',
        'pokemons': [
            {pokemon: getPokemonByName('Pikachu'), levelMin: 0, levelMax: 100},
            {pokemon: getPokemonByName('Pikachu'), levelMin: 0, levelMax: 40},
            {pokemon: getPokemonByName('Raichu'), levelMin: 40, levelMax: 100},
            {pokemon: getPokemonByName('Magnemite'), levelMin: 0, levelMax: 100},
            {pokemon: getPokemonByName('Magnemite'), levelMin: 0, levelMax: 40},
            {pokemon: getPokemonByName('Magneton'), levelMin: 35, levelMax: 100},
            {pokemon: getPokemonByName('Voltorb'), levelMin: 0, levelMax: 100},
            {pokemon: getPokemonByName('Voltorb'), levelMin: 0, levelMax: 40},
            {pokemon: getPokemonByName('Electrode'), levelMin: 35, levelMax: 100},
            {pokemon: getPokemonByName('Electabuzz'), levelMin: 40, levelMax: 100},
            {pokemon: getPokemonByName('Jolteon'), levelMin: 35, levelMax: 100},
        ]
    },

)

export function getRandomTrainer(): BotTrainer {
    const trainerNames = Object.values(BotTrainerList).map((trainer) => trainer.name);
    const randomIndex = Math.floor(Math.random() * trainerNames.length);
    const sTrainerName = trainerNames[randomIndex];
    const bot = getBotTrainerByName(sTrainerName);
    return new BotTrainer(bot);
}