import PokemonType from './PokemonType';

function createPokemonArray<T extends readonly PokemonData[] & Array<{ name: V }>, V extends string>(...args: T) {
    return args;
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

export const pokemonList = createPokemonArray(
    {
        'id': 1,
        'name': 'Bulbasaur',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 45,
        'attack': 49,
        'specialAttack': 65,
        'defense': 49,
        'specialDefense': 65,
        'speed': 45,
    },
    {
        'id': 4,
        'name': 'Charmander',
        'catchRate': 45,
        'type': [PokemonType.Fire],
        'hitpoints': 39,
        'attack': 52,
        'specialAttack': 43,
        'defense': 60,
        'specialDefense': 50,
        'speed': 50,
    },
    {
        'id': 7,
        'name': 'Squirtle',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 44,
        'attack': 48,
        'specialAttack': 65,
        'defense': 50,
        'specialDefense': 64,
        'speed': 43,
    },
    {
        'id': 74,
        'name': 'Geodude',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 40,
        'attack': 80,
        'specialAttack': 100,
        'defense': 30,
        'specialDefense': 30,
        'speed': 20,
    },
    {
        'id': 95,
        'name': 'Onix',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 35,
        'attack': 45,
        'specialAttack': 160,
        'defense': 30,
        'specialDefense': 45,
        'speed': 70,
    }
)