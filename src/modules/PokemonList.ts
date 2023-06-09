import { EvolutionData, EvolutionType } from './Evolution';
import { ItemList } from "./ItemList";
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
    evolutions?: EvolutionData[];
    femaleRatio?: number;
}

export const pokemonList = createPokemonArray(
    {
        'id': 1,
        'name': 'Bulbasaur',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 45,
        'attack': 49,
        'defense': 49,
        'specialAttack': 65,
        'specialDefense': 65,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Ivysaur',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 2,
        'name': 'Ivysaur',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 60,
        'attack': 62,
        'defense': 63,
        'specialAttack': 80,
        'specialDefense': 80,
        'speed': 60,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Venusaur',
                conditions: {
                    level: 32
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 3,
        'name': 'Venusaur',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 80,
        'attack': 82,
        'defense': 83,
        'specialAttack': 100,
        'specialDefense': 100,
        'speed': 80,
        'femaleRatio': 0.125,
    },
    {
        'id': 4,
        'name': 'Charmander',
        'catchRate': 45,
        'type': [PokemonType.Fire],
        'hitpoints': 39,
        'attack': 52,
        'defense': 43,
        'specialAttack': 60,
        'specialDefense': 50,
        'speed': 50,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Charmeleon',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 5,
        'name': 'Charmeleon',
        'catchRate': 45,
        'type': [PokemonType.Fire],
        'hitpoints': 58,
        'attack': 64,
        'defense': 58,
        'specialAttack': 80,
        'specialDefense': 65,
        'speed': 80,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Charizard',
                conditions: {
                    level: 32
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 6,
        'name': 'Charizard',
        'catchRate': 45,
        'type': [PokemonType.Fire, PokemonType.Flying],
        'hitpoints': 78,
        'attack': 84,
        'defense': 78,
        'specialAttack': 109,
        'specialDefense': 85,
        'speed': 100,
        'femaleRatio': 0.125,
    },
    {
        'id': 7,
        'name': 'Squirtle',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 44,
        'attack': 48,
        'defense': 65,
        'specialAttack': 50,
        'specialDefense': 64,
        'speed': 43,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Wartortle',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 8,
        'name': 'Wartortle',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 59,
        'attack': 63,
        'defense': 80,
        'specialAttack': 65,
        'specialDefense': 80,
        'speed': 58,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Blastoise',
                conditions: {
                    level: 32
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 9,
        'name': 'Blastoise',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 79,
        'attack': 83,
        'defense': 100,
        'specialAttack': 85,
        'specialDefense': 105,
        'speed': 78,
        'femaleRatio': 0.125,
    },
    {
        'id': 10,
        'name': 'Caterpie',
        'catchRate': 255,
        'type': [PokemonType.Bug],
        'hitpoints': 45,
        'attack': 30,
        'defense': 35,
        'specialAttack': 20,
        'specialDefense': 20,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Metapod',
                conditions: {
                    level: 7
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 11,
        'name': 'Metapod',
        'catchRate': 45,
        'type': [PokemonType.Bug, PokemonType.Flying],
        'hitpoints': 50,
        'attack': 20,
        'defense': 55,
        'specialAttack': 25,
        'specialDefense': 25,
        'speed': 70,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Butterfree',
                conditions: {
                    level: 10
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 12,
        'name': 'Butterfree',
        'catchRate': 45,
        'type': [PokemonType.Bug],
        'hitpoints': 60,
        'attack': 45,
        'defense': 50,
        'specialAttack': 90,
        'specialDefense': 80,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 13,
        'name': 'Weedle',
        'catchRate': 255,
        'type': [PokemonType.Bug, PokemonType.Poison],
        'hitpoints': 40,
        'attack': 35,
        'defense': 30,
        'specialAttack': 20,
        'specialDefense': 20,
        'speed': 50,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Kakuna',
                conditions: {
                    level: 7
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 14,
        'name': 'Kakuna',
        'catchRate': 120,
        'type': [PokemonType.Bug, PokemonType.Poison],
        'hitpoints': 45,
        'attack': 25,
        'defense': 50,
        'specialAttack': 25,
        'specialDefense': 25,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Beedrill',
                conditions: {
                    level: 10
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 15,
        'name': 'Beedrill',
        'catchRate': 45,
        'type': [PokemonType.Bug, PokemonType.Poison],
        'hitpoints': 65,
        'attack': 90,
        'defense': 40,
        'specialAttack': 45,
        'specialDefense': 80,
        'speed': 75,
        'femaleRatio': 0.5,
    },
    {
        'id': 16,
        'name': 'Pidgey',
        'catchRate': 255,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 40,
        'attack': 45,
        'defense': 40,
        'specialAttack': 35,
        'specialDefense': 35,
        'speed': 56,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Pidgeotto',
                conditions: {
                    level: 18
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 17,
        'name': 'Pidgeotto',
        'catchRate': 120,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 63,
        'attack': 60,
        'defense': 55,
        'specialAttack': 50,
        'specialDefense': 50,
        'speed': 71,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Pidgeot',
                conditions: {
                    level: 36
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 18,
        'name': 'Pidgeot',
        'catchRate': 45,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 83,
        'attack': 80,
        'defense': 75,
        'specialAttack': 70,
        'specialDefense': 70,
        'speed': 101,
        'femaleRatio': 0.5,
    },
    {
        'id': 19,
        'name': 'Rattata',
        'catchRate': 255,
        'type': [PokemonType.Normal],
        'hitpoints': 30,
        'attack': 56,
        'defense': 35,
        'specialAttack': 25,
        'specialDefense': 35,
        'speed': 72,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Raticate',
                conditions: {
                    level: 20
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 20,
        'name': 'Raticate',
        'catchRate': 127,
        'type': [PokemonType.Normal],
        'hitpoints': 55,
        'attack': 81,
        'defense': 60,
        'specialAttack': 50,
        'specialDefense': 70,
        'speed': 97,
        'femaleRatio': 0.5,
    },
    {
        'id': 21,
        'name': 'Spearow',
        'catchRate': 255,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 40,
        'attack': 60,
        'defense': 30,
        'specialAttack': 31,
        'specialDefense': 31,
        'speed': 70,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Fearow',
                conditions: {
                    level: 20
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 22,
        'name': 'Fearow',
        'catchRate': 90,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 65,
        'attack': 90,
        'defense': 65,
        'specialAttack': 61,
        'specialDefense': 61,
        'speed': 100,
        'femaleRatio': 0.5,
    },
    {
        'id': 23,
        'name': 'Ekans',
        'catchRate': 255,
        'type': [PokemonType.Poison],
        'hitpoints': 35,
        'attack': 60,
        'defense': 44,
        'specialAttack': 40,
        'specialDefense': 54,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Arbok',
                conditions: {
                    level: 22
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 24,
        'name': 'Arbok',
        'catchRate': 90,
        'type': [PokemonType.Poison],
        'hitpoints': 60,
        'attack': 95,
        'defense': 69,
        'specialAttack': 65,
        'specialDefense': 79,
        'speed': 80,
        'femaleRatio': 0.5,
    },
    {
        'id': 25,
        'name': 'Pikachu',
        'catchRate': 190,
        'type': [PokemonType.Electric],
        'hitpoints': 35,
        'attack': 55,
        'defense': 40,
        'specialAttack': 50,
        'specialDefense': 50,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Raichu',
                conditions: {
                    item: ItemList.ThunderStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 26,
        'name': 'Raichu',
        'catchRate': 75,
        'type': [PokemonType.Electric],
        'hitpoints': 60,
        'attack': 90,
        'defense': 55,
        'specialAttack': 90,
        'specialDefense': 80,
        'speed': 110,
        'femaleRatio': 0.5,
    },
    {
        'id': 27,
        'name': 'Sandshrew',
        'catchRate': 255,
        'type': [PokemonType.Ground],
        'hitpoints': 50,
        'attack': 75,
        'defense': 85,
        'specialAttack': 20,
        'specialDefense': 30,
        'speed': 40,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Sandslash',
                conditions: {
                    level: 22
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 28,
        'name': 'Sandslash',
        'catchRate': 90,
        'type': [PokemonType.Ground],
        'hitpoints': 75,
        'attack': 100,
        'defense': 110,
        'specialAttack': 45,
        'specialDefense': 55,
        'speed': 65,
        'femaleRatio': 0.5,
    },
    {
        'id': 29,
        'name': 'Nidoran♀',
        'catchRate': 235,
        'type': [PokemonType.Poison],
        'hitpoints': 55,
        'attack': 47,
        'defense': 52,
        'specialAttack': 40,
        'specialDefense': 40,
        'speed': 41,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Nidorina',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 1,
    },
    {
        'id': 30,
        'name': 'Nidorina',
        'catchRate': 120,
        'type': [PokemonType.Poison],
        'hitpoints': 70,
        'attack': 62,
        'defense': 67,
        'specialAttack': 55,
        'specialDefense': 55,
        'speed': 56,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Nidoqueen',
                conditions: {
                    item: ItemList.MoonStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 1,
    },
    {
        'id': 31,
        'name': 'Nidoqueen',
        'catchRate': 45,
        'type': [PokemonType.Poison, PokemonType.Ground],
        'hitpoints': 90,
        'attack': 92,
        'defense': 87,
        'specialAttack': 75,
        'specialDefense': 85,
        'speed': 76,
        'femaleRatio': 1,
    },
    {
        'id': 32,
        'name': 'Nidoran♂',
        'catchRate': 235,
        'type': [PokemonType.Poison],
        'hitpoints': 46,
        'attack': 57,
        'defense': 40,
        'specialAttack': 40,
        'specialDefense': 40,
        'speed': 50,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Nidorino',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0,
    },
    {
        'id': 33,
        'name': 'Nidorino',
        'catchRate': 120,
        'type': [PokemonType.Poison],
        'hitpoints': 61,
        'attack': 72,
        'defense': 57,
        'specialAttack': 55,
        'specialDefense': 55,
        'speed': 65,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Nodiking',
                conditions: {
                    item: ItemList.MoonStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0,
    },
    {
        'id': 34,
        'name': 'Nidoking',
        'catchRate': 45,
        'type': [PokemonType.Poison, PokemonType.Ground],
        'hitpoints': 81,
        'attack': 102,
        'defense': 77,
        'specialAttack': 85,
        'specialDefense': 75,
        'speed': 85,
        'femaleRatio': 0,
    },
    {
        'id': 35,
        'name': 'Clefairy',
        'catchRate': 150,
        'type': [PokemonType.Fairy],
        'hitpoints': 70,
        'attack': 45,
        'defense': 48,
        'specialAttack': 60,
        'specialDefense': 65,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Clefable',
                conditions: {
                    item: ItemList.MoonStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.75,
    },
    {
        'id': 36,
        'name': 'Clefable',
        'catchRate': 25,
        'type': [PokemonType.Fairy],
        'hitpoints': 95,
        'attack': 70,
        'defense': 73,
        'specialAttack': 95,
        'specialDefense': 90,
        'speed': 60,
        'femaleRatio': 0.75,
    },
    {
        'id': 37,
        'name': 'Vulpix',
        'catchRate': 190,
        'type': [PokemonType.Fire],
        'hitpoints': 38,
        'attack': 41,
        'defense': 40,
        'specialAttack': 50,
        'specialDefense': 65,
        'speed': 65,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Ninetales',
                conditions: {
                    item: ItemList.FireStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.75,
    },
    {
        'id': 38,
        'name': 'Ninetales',
        'catchRate': 75,
        'type': [PokemonType.Fire],
        'hitpoints': 73,
        'attack': 76,
        'defense': 75,
        'specialAttack': 81,
        'specialDefense': 100,
        'speed': 100,
        'femaleRatio': 0.75,
    },
    {
        'id': 39,
        'name': 'Jigglypuff',
        'catchRate': 170,
        'type': [PokemonType.Normal, PokemonType.Fairy],
        'hitpoints': 115,
        'attack': 45,
        'defense': 20,
        'specialAttack': 45,
        'specialDefense': 25,
        'speed': 20,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Wigglytuff',
                conditions: {
                    item: ItemList.MoonStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.75,
    },
    {
        'id': 40,
        'name': 'Jigglypuff',
        'catchRate': 50,
        'type': [PokemonType.Normal, PokemonType.Fairy],
        'hitpoints': 140,
        'attack': 70,
        'defense': 45,
        'specialAttack': 85,
        'specialDefense': 50,
        'speed': 45,
        'femaleRatio': 0.75,
    },
    {
        'id': 41,
        'name': 'Zubat',
        'catchRate': 255,
        'type': [PokemonType.Poison, PokemonType.Flying],
        'hitpoints': 40,
        'attack': 45,
        'defense': 35,
        'specialAttack': 30,
        'specialDefense': 40,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Golbat',
                conditions: {
                    level: 22
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 42,
        'name': 'Golbat',
        'catchRate': 90,
        'type': [PokemonType.Poison, PokemonType.Flying],
        'hitpoints': 75,
        'attack': 80,
        'defense': 70,
        'specialAttack': 65,
        'specialDefense': 75,
        'speed': 90,
        'femaleRatio': 0.5,
    },
    {
        'id': 43,
        'name': 'Oddish',
        'catchRate': 255,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 45,
        'attack': 50,
        'defense': 55,
        'specialAttack': 75,
        'specialDefense': 65,
        'speed': 30,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Gloom',
                conditions: {
                    level: 21
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 44,
        'name': 'Gloom',
        'catchRate': 120,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 60,
        'attack': 65,
        'defense': 70,
        'specialAttack': 85,
        'specialDefense': 75,
        'speed': 40,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Vileplume',
                conditions: {
                    item: ItemList.LeafStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 45,
        'name': 'Vileplume',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 75,
        'attack': 80,
        'defense': 85,
        'specialAttack': 110,
        'specialDefense': 90,
        'speed': 50,
        'femaleRatio': 0.5,
    },
    {
        'id': 46,
        'name': 'Paras',
        'catchRate': 190,
        'type': [PokemonType.Bug, PokemonType.Grass],
        'hitpoints': 35,
        'attack': 70,
        'defense': 55,
        'specialAttack': 45,
        'specialDefense': 55,
        'speed': 25,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Parasect',
                conditions: {
                    level: 24
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 47,
        'name': 'Paras',
        'catchRate': 75,
        'type': [PokemonType.Bug, PokemonType.Grass],
        'hitpoints': 60,
        'attack': 95,
        'defense': 80,
        'specialAttack': 60,
        'specialDefense': 80,
        'speed': 30,
        'femaleRatio': 0.5,
    },
    {
        'id': 48,
        'name': 'Venonat',
        'catchRate': 190,
        'type': [PokemonType.Bug, PokemonType.Poison],
        'hitpoints': 60,
        'attack': 55,
        'defense': 50,
        'specialAttack': 40,
        'specialDefense': 55,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Venomoth',
                conditions: {
                    level: 31
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 49,
        'name': 'Venomoth',
        'catchRate': 75,
        'type': [PokemonType.Bug, PokemonType.Poison],
        'hitpoints': 70,
        'attack': 65,
        'defense': 60,
        'specialAttack': 90,
        'specialDefense': 75,
        'speed': 90,
        'femaleRatio': 0.5,
    },
    {
        'id': 50,
        'name': 'Diglett',
        'catchRate': 255,
        'type': [PokemonType.Ground],
        'hitpoints': 10,
        'attack': 55,
        'defense': 25,
        'specialAttack': 35,
        'specialDefense': 45,
        'speed': 95,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Dugtrio',
                conditions: {
                    level: 26
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 51,
        'name': 'Dugtrio',
        'catchRate': 50,
        'type': [PokemonType.Ground],
        'hitpoints': 35,
        'attack': 100,
        'defense': 50,
        'specialAttack': 50,
        'specialDefense': 70,
        'speed': 120,
        'femaleRatio': 0.5,
    },
    {
        'id': 52,
        'name': 'Meowth',
        'catchRate': 255,
        'type': [PokemonType.Normal],
        'hitpoints': 40,
        'attack': 45,
        'defense': 35,
        'specialAttack': 40,
        'specialDefense': 40,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Persian',
                conditions: {
                    level: 28
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 53,
        'name': 'Persian',
        'catchRate': 90,
        'type': [PokemonType.Normal],
        'hitpoints': 65,
        'attack': 70,
        'defense': 60,
        'specialAttack': 65,
        'specialDefense': 65,
        'speed': 115,
        'femaleRatio': 0.5,
    },
    {
        'id': 54,
        'name': 'Psyduck',
        'catchRate': 190,
        'type': [PokemonType.Water],
        'hitpoints': 50,
        'attack': 52,
        'defense': 48,
        'specialAttack': 65,
        'specialDefense': 50,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Golduck',
                conditions: {
                    level: 33
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 55,
        'name': 'Golduck',
        'catchRate': 75,
        'type': [PokemonType.Water],
        'hitpoints': 80,
        'attack': 82,
        'defense': 78,
        'specialAttack': 95,
        'specialDefense': 80,
        'speed': 85,
        'femaleRatio': 0.5,
    },
    {
        'id': 56,
        'name': 'Mankey',
        'catchRate': 190,
        'type': [PokemonType.Fighting],
        'hitpoints': 40,
        'attack': 80,
        'defense': 35,
        'specialAttack': 35,
        'specialDefense': 45,
        'speed': 70,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Primeape',
                conditions: {
                    level: 57
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 57,
        'name': 'Primeape',
        'catchRate': 75,
        'type': [PokemonType.Fighting],
        'hitpoints': 65,
        'attack': 105,
        'defense': 60,
        'specialAttack': 60,
        'specialDefense': 70,
        'speed': 95,
        'femaleRatio': 0.5,
    },
    {
        'id': 58,
        'name': 'Growlithe',
        'catchRate': 190,
        'type': [PokemonType.Fire],
        'hitpoints': 55,
        'attack': 70,
        'defense': 45,
        'specialAttack': 70,
        'specialDefense': 50,
        'speed': 60,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Arcanine',
                conditions: {
                    item: ItemList.FireStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.25,
    },
    {
        'id': 59,
        'name': 'Arcanine',
        'catchRate': 75,
        'type': [PokemonType.Fire],
        'hitpoints': 90,
        'attack': 110,
        'defense': 80,
        'specialAttack': 100,
        'specialDefense': 80,
        'speed': 95,
        'femaleRatio': 0.25,
    },
    {
        'id': 60,
        'name': 'Poliwag',
        'catchRate': 255,
        'type': [PokemonType.Water],
        'hitpoints': 40,
        'attack': 50,
        'defense': 40,
        'specialAttack': 40,
        'specialDefense': 40,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Poliwhirl',
                conditions: {
                    level: 25
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 61,
        'name': 'Poliwhirl',
        'catchRate': 120,
        'type': [PokemonType.Water],
        'hitpoints': 65,
        'attack': 65,
        'defense': 65,
        'specialAttack': 50,
        'specialDefense': 50,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Poliwrath',
                conditions: {
                    item: ItemList.WaterStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 62,
        'name': 'Poliwrath',
        'catchRate': 45,
        'type': [PokemonType.Water, PokemonType.Fighting],
        'hitpoints': 90,
        'attack': 95,
        'defense': 95,
        'specialAttack': 70,
        'specialDefense': 90,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 63,
        'name': 'Abra',
        'catchRate': 200,
        'type': [PokemonType.Psychic],
        'hitpoints': 25,
        'attack': 20,
        'defense': 15,
        'specialAttack': 105,
        'specialDefense': 55,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Kadabra',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0.25,
    },
    {
        'id': 64,
        'name': 'Kadabra',
        'catchRate': 100,
        'type': [PokemonType.Psychic],
        'hitpoints': 40,
        'attack': 35,
        'defense': 30,
        'specialAttack': 120,
        'specialDefense': 70,
        'speed': 105,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Alakazam',
                conditions: {
                    item: ItemList.LinkingCord,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.25,
    },
    {
        'id': 65,
        'name': 'Alakazam',
        'catchRate': 50,
        'type': [PokemonType.Psychic],
        'hitpoints': 55,
        'attack': 50,
        'defense': 45,
        'specialAttack': 135,
        'specialDefense': 95,
        'speed': 120,
        'femaleRatio': 0.25,
    },
    {
        'id': 66,
        'name': 'Machop',
        'catchRate': 180,
        'type': [PokemonType.Fighting],
        'hitpoints': 70,
        'attack': 80,
        'defense': 50,
        'specialAttack': 35,
        'specialDefense': 35,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Machoke',
                conditions: {
                    level: 16
                }
            }
        ],
        'femaleRatio': 0.25,
    },
    {
        'id': 67,
        'name': 'Machoke',
        'catchRate': 100,
        'type': [PokemonType.Fighting],
        'hitpoints': 80,
        'attack': 100,
        'defense': 70,
        'specialAttack': 50,
        'specialDefense': 60,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Machamp',
                conditions: {
                    item: ItemList.LinkingCord,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.25,
    },
    {
        'id': 68,
        'name': 'Machamp',
        'catchRate': 45,
        'type': [PokemonType.Fighting],
        'hitpoints': 90,
        'attack': 130,
        'defense': 80,
        'specialAttack': 65,
        'specialDefense': 85,
        'speed': 55,
        'femaleRatio': 0.25,
    },
    {
        'id': 69,
        'name': 'Bellsprout',
        'catchRate': 255,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 50,
        'attack': 75,
        'defense': 35,
        'specialAttack': 70,
        'specialDefense': 30,
        'speed': 40,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Weepinbell',
                conditions: {
                    level: 21
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 70,
        'name': 'Weepinbell',
        'catchRate': 120,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 65,
        'attack': 90,
        'defense': 50,
        'specialAttack': 85,
        'specialDefense': 45,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Victreebel',
                conditions: {
                    item: ItemList.LeafStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 71,
        'name': 'Victreebel',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Poison],
        'hitpoints': 80,
        'attack': 105,
        'defense': 65,
        'specialAttack': 100,
        'specialDefense': 70,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 72,
        'name': 'Tentacool',
        'catchRate': 190,
        'type': [PokemonType.Water, PokemonType.Poison],
        'hitpoints': 40,
        'attack': 40,
        'defense': 35,
        'specialAttack': 50,
        'specialDefense': 100,
        'speed': 70,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Tentacruel',
                conditions: {
                    level: 30
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 73,
        'name': 'Tentacruel',
        'catchRate': 60,
        'type': [PokemonType.Water, PokemonType.Poison],
        'hitpoints': 80,
        'attack': 70,
        'defense': 65,
        'specialAttack': 80,
        'specialDefense': 120,
        'speed': 100,
        'femaleRatio': 0.5,
    },
    {
        'id': 74,
        'name': 'Geodude',
        'catchRate': 255,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 40,
        'attack': 80,
        'defense': 100,
        'specialAttack': 30,
        'specialDefense': 30,
        'speed': 20,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Graveler',
                conditions: {
                    'level': 25
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 75,
        'name': 'Graveler',
        'catchRate': 120,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 55,
        'attack': 95,
        'defense': 115,
        'specialAttack': 45,
        'specialDefense': 45,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Golem',
                conditions: {
                    item: ItemList.LinkingCord,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 76,
        'name': 'Golem',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 80,
        'attack': 120,
        'defense': 130,
        'specialAttack': 55,
        'specialDefense': 65,
        'speed': 45,
        'femaleRatio': 0.5,
    },
    {
        'id': 77,
        'name': 'Ponyta',
        'catchRate': 190,
        'type': [PokemonType.Fire],
        'hitpoints': 50,
        'attack': 85,
        'defense': 55,
        'specialAttack': 65,
        'specialDefense': 65,
        'speed': 90,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Rapidash',
                conditions: {
                    level: 40
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 78,
        'name': 'Rapidash',
        'catchRate': 60,
        'type': [PokemonType.Fire],
        'hitpoints': 65,
        'attack': 100,
        'defense': 70,
        'specialAttack': 80,
        'specialDefense': 80,
        'speed': 105,
        'femaleRatio': 0.5,
    },
    {
        'id': 79,
        'name': 'Slowpoke',
        'catchRate': 190,
        'type': [PokemonType.Water, PokemonType.Psychic],
        'hitpoints': 90,
        'attack': 65,
        'defense': 65,
        'specialAttack': 40,
        'specialDefense': 40,
        'speed': 15,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Slowbro',
                conditions: {
                    level: 37
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 80,
        'name': 'Slowbro',
        'catchRate': 75,
        'type': [PokemonType.Water, PokemonType.Psychic],
        'hitpoints': 95,
        'attack': 75,
        'defense': 110,
        'specialAttack': 100,
        'specialDefense': 80,
        'speed': 30,
        'femaleRatio': 0.5,
    },
    {
        'id': 81,
        'name': 'Magnemite',
        'catchRate': 190,
        'type': [PokemonType.Electric, PokemonType.Steel],
        'hitpoints': 25,
        'attack': 35,
        'defense': 70,
        'specialAttack': 95,
        'specialDefense': 55,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Magneton',
                conditions: {
                    level: 30
                }
            }
        ],
    },
    {
        'id': 82,
        'name': 'Magneton',
        'catchRate': 60,
        'type': [PokemonType.Electric, PokemonType.Steel],
        'hitpoints': 50,
        'attack': 60,
        'defense': 95,
        'specialAttack': 120,
        'specialDefense': 70,
        'speed': 70,
    },
    {
        'id': 83,
        'name': "Farfetch'd",
        'catchRate': 45,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 52,
        'attack': 90,
        'defense': 55,
        'specialAttack': 58,
        'specialDefense': 62,
        'speed': 60,
        'femaleRatio': 0.5,
    },
    {
        'id': 84,
        'name': 'Doduo',
        'catchRate': 190,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 35,
        'attack': 85,
        'defense': 45,
        'specialAttack': 35,
        'specialDefense': 35,
        'speed': 75,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Dodrio',
                conditions: {
                    level: 31
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 85,
        'name': 'Dodrio',
        'catchRate': 45,
        'type': [PokemonType.Normal, PokemonType.Flying],
        'hitpoints': 60,
        'attack': 110,
        'defense': 70,
        'specialAttack': 60,
        'specialDefense': 60,
        'speed': 110,
        'femaleRatio': 0.5,
    },
    {
        'id': 86,
        'name': 'Seel',
        'catchRate': 190,
        'type': [PokemonType.Water],
        'hitpoints': 65,
        'attack': 45,
        'defense': 55,
        'specialAttack': 45,
        'specialDefense': 70,
        'speed': 45,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Dewgong',
                conditions: {
                    level: 34
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 87,
        'name': 'Dewgong',
        'catchRate': 75,
        'type': [PokemonType.Water, PokemonType.Ice],
        'hitpoints': 90,
        'attack': 70,
        'defense': 80,
        'specialAttack': 70,
        'specialDefense': 95,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 88,
        'name': 'Grimer',
        'catchRate': 190,
        'type': [PokemonType.Poison],
        'hitpoints': 80,
        'attack': 80,
        'defense': 50,
        'specialAttack': 40,
        'specialDefense': 50,
        'speed': 25,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Muk',
                conditions: {
                    level: 38
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 89,
        'name': 'Muk',
        'catchRate': 75,
        'type': [PokemonType.Poison],
        'hitpoints': 105,
        'attack': 105,
        'defense': 75,
        'specialAttack': 65,
        'specialDefense': 100,
        'speed': 50,
        'femaleRatio': 0.5,
    },
    {
        'id': 90,
        'name': 'Shellder',
        'catchRate': 190,
        'type': [PokemonType.Water],
        'hitpoints': 30,
        'attack': 65,
        'defense': 100,
        'specialAttack': 45,
        'specialDefense': 25,
        'speed': 40,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Cloyster',
                conditions: {
                    item: ItemList.WaterStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 91,
        'name': 'Cloyster',
        'catchRate': 60,
        'type': [PokemonType.Water, PokemonType.Ice],
        'hitpoints': 50,
        'attack': 95,
        'defense': 180,
        'specialAttack': 85,
        'specialDefense': 45,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 92,
        'name': 'Gastly',
        'catchRate': 190,
        'type': [PokemonType.Ghost, PokemonType.Poison],
        'hitpoints': 30,
        'attack': 35,
        'defense': 30,
        'specialAttack': 100,
        'specialDefense': 35,
        'speed': 80,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Haunter',
                conditions: {
                    level: 25
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 93,
        'name': 'Haunter',
        'catchRate': 90,
        'type': [PokemonType.Ghost, PokemonType.Poison],
        'hitpoints': 45,
        'attack': 50,
        'defense': 45,
        'specialAttack': 115,
        'specialDefense': 55,
        'speed': 95,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Gengar',
                conditions: {
                    item: ItemList.LinkingCord,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 94,
        'name': 'Gengar',
        'catchRate': 45,
        'type': [PokemonType.Ghost, PokemonType.Poison],
        'hitpoints': 60,
        'attack': 65,
        'defense': 60,
        'specialAttack': 130,
        'specialDefense': 75,
        'speed': 110,
        'femaleRatio': 0.5,
    },
    {
        'id': 95,
        'name': 'Onix',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Ground],
        'hitpoints': 35,
        'attack': 45,
        'defense': 160,
        'specialAttack': 30,
        'specialDefense': 45,
        'speed': 70,
        'femaleRatio': 0.5,
    },
    {
        'id': 96,
        'name': 'Drowzee',
        'catchRate': 190,
        'type': [PokemonType.Psychic],
        'hitpoints': 60,
        'attack': 48,
        'defense': 45,
        'specialAttack': 43,
        'specialDefense': 90,
        'speed': 42,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Hypno',
                conditions: {
                    level: 26
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 97,
        'name': 'Hypno',
        'catchRate': 75,
        'type': [PokemonType.Psychic],
        'hitpoints': 85,
        'attack': 73,
        'defense': 70,
        'specialAttack': 73,
        'specialDefense': 115,
        'speed': 67,
        'femaleRatio': 0.5,
    },
    {
        'id': 98,
        'name': 'Krabby',
        'catchRate': 225,
        'type': [PokemonType.Water],
        'hitpoints': 30,
        'attack': 105,
        'defense': 90,
        'specialAttack': 25,
        'specialDefense': 25,
        'speed': 50,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Kingler',
                conditions: {
                    level: 28
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 99,
        'name': 'Kingler',
        'catchRate': 60,
        'type': [PokemonType.Water],
        'hitpoints': 55,
        'attack': 130,
        'defense': 115,
        'specialAttack': 50,
        'specialDefense': 50,
        'speed': 75,
        'femaleRatio': 0.5,
    },
    {
        'id': 100,
        'name': 'Voltorb',
        'catchRate': 190,
        'type': [PokemonType.Electric],
        'hitpoints': 40,
        'attack': 30,
        'defense': 50,
        'specialAttack': 55,
        'specialDefense': 55,
        'speed': 100,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Electrode',
                conditions: {
                    level: 30
                }
            }
        ],
    },
    {
        'id': 101,
        'name': 'Electrode',
        'catchRate': 60,
        'type': [PokemonType.Electric],
        'hitpoints': 60,
        'attack': 50,
        'defense': 70,
        'specialAttack': 80,
        'specialDefense': 80,
        'speed': 150,
    },
    {
        'id': 102,
        'name': 'Exeggcute',
        'catchRate': 90,
        'type': [PokemonType.Grass, PokemonType.Psychic],
        'hitpoints': 60,
        'attack': 40,
        'defense': 80,
        'specialAttack': 60,
        'specialDefense': 45,
        'speed': 40,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Exeggutor',
                conditions: {
                    item: ItemList.LeafStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 103,
        'name': 'Exeggutor',
        'catchRate': 45,
        'type': [PokemonType.Grass, PokemonType.Psychic],
        'hitpoints': 95,
        'attack': 95,
        'defense': 85,
        'specialAttack': 125,
        'specialDefense': 75,
        'speed': 55,
        'femaleRatio': 0.5,
    },
    {
        'id': 104,
        'name': 'Cubone',
        'catchRate': 190,
        'type': [PokemonType.Ground],
        'hitpoints': 50,
        'attack': 50,
        'defense': 95,
        'specialAttack': 40,
        'specialDefense': 50,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Marowak',
                conditions: {
                    level: 28
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 105,
        'name': 'Marowak',
        'catchRate': 75,
        'type': [PokemonType.Ground],
        'hitpoints': 60,
        'attack': 80,
        'defense': 110,
        'specialAttack': 50,
        'specialDefense': 80,
        'speed': 45,
        'femaleRatio': 0.5,
    },
    {
        'id': 106,
        'name': 'Hitmonlee',
        'catchRate': 45,
        'type': [PokemonType.Fighting],
        'hitpoints': 50,
        'attack': 120,
        'defense': 53,
        'specialAttack': 35,
        'specialDefense': 110,
        'speed': 87,
        'femaleRatio': 0,
    },
    {
        'id': 107,
        'name': 'Hitmonchan',
        'catchRate': 45,
        'type': [PokemonType.Fighting],
        'hitpoints': 50,
        'attack': 105,
        'defense': 79,
        'specialAttack': 35,
        'specialDefense': 110,
        'speed': 76,
        'femaleRatio': 0,
    },
    {
        'id': 108,
        'name': 'Lickitung',
        'catchRate': 45,
        'type': [PokemonType.Fighting],
        'hitpoints': 90,
        'attack': 55,
        'defense': 75,
        'specialAttack': 60,
        'specialDefense': 75,
        'speed': 30,
        'femaleRatio': 0.5,
    },
    {
        'id': 109,
        'name': 'Koffing',
        'catchRate': 190,
        'type': [PokemonType.Poison],
        'hitpoints': 40,
        'attack': 65,
        'defense': 95,
        'specialAttack': 60,
        'specialDefense': 45,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Weezing',
                conditions: {
                    level: 35
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 110,
        'name': 'Weezing',
        'catchRate': 60,
        'type': [PokemonType.Poison],
        'hitpoints': 65,
        'attack': 90,
        'defense': 120,
        'specialAttack': 85,
        'specialDefense': 70,
        'speed': 60,
        'femaleRatio': 0.5,
    },
    {
        'id': 111,
        'name': 'Rhyhorn',
        'catchRate': 120,
        'type': [PokemonType.Ground, PokemonType.Rock],
        'hitpoints': 80,
        'attack': 85,
        'defense': 95,
        'specialAttack': 30,
        'specialDefense': 30,
        'speed': 25,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Rhydon',
                conditions: {
                    level: 42
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 112,
        'name': 'Rhydon',
        'catchRate': 60,
        'type': [PokemonType.Ground, PokemonType.Rock],
        'hitpoints': 105,
        'attack': 130,
        'defense': 120,
        'specialAttack': 45,
        'specialDefense': 45,
        'speed': 40,
        'femaleRatio': 0.5,
    },
    {
        'id': 113,
        'name': 'Chansey',
        'catchRate': 30,
        'type': [PokemonType.Normal],
        'hitpoints': 250,
        'attack': 5,
        'defense': 5,
        'specialAttack': 35,
        'specialDefense': 105,
        'speed': 50,
        'femaleRatio': 1,
    },
    {
        'id': 114,
        'name': 'Tangela',
        'catchRate': 45,
        'type': [PokemonType.Grass],
        'hitpoints': 65,
        'attack': 55,
        'defense': 115,
        'specialAttack': 100,
        'specialDefense': 40,
        'speed': 60,
        'femaleRatio': 0.5,
    },
    {
        'id': 115,
        'name': 'Kangaskhan',
        'catchRate': 45,
        'type': [PokemonType.Normal],
        'hitpoints': 105,
        'attack': 95,
        'defense': 80,
        'specialAttack': 40,
        'specialDefense': 80,
        'speed': 90,
        'femaleRatio': 1,
    },
    {
        'id': 116,
        'name': 'Horsea',
        'catchRate': 225,
        'type': [PokemonType.Water],
        'hitpoints': 30,
        'attack': 40,
        'defense': 70,
        'specialAttack': 70,
        'specialDefense': 25,
        'speed': 60,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Seadra',
                conditions: {
                    level: 32
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 117,
        'name': 'Seadra',
        'catchRate': 75,
        'type': [PokemonType.Water],
        'hitpoints': 55,
        'attack': 65,
        'defense': 95,
        'specialAttack': 95,
        'specialDefense': 45,
        'speed': 85,
        'femaleRatio': 0.5,
    },
    {
        'id': 118,
        'name': 'Goldeen',
        'catchRate': 225,
        'type': [PokemonType.Water],
        'hitpoints': 45,
        'attack': 67,
        'defense': 60,
        'specialAttack': 35,
        'specialDefense': 50,
        'speed': 63,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Seaking',
                conditions: {
                    level: 33
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 119,
        'name': 'Seaking',
        'catchRate': 60,
        'type': [PokemonType.Water],
        'hitpoints': 80,
        'attack': 92,
        'defense': 65,
        'specialAttack': 65,
        'specialDefense': 80,
        'speed': 68,
        'femaleRatio': 0.5,
    },
    {
        'id': 120,
        'name': 'Staryu',
        'catchRate': 225,
        'type': [PokemonType.Water],
        'hitpoints': 30,
        'attack': 45,
        'defense': 55,
        'specialAttack': 70,
        'specialDefense': 55,
        'speed': 85,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Starmie',
                conditions: {
                    item: ItemList.WaterStone,
                    numItem: 1
                }
            }
        ],
    },
    {
        'id': 121,
        'name': 'Starmie',
        'catchRate': 60,
        'type': [PokemonType.Water, PokemonType.Psychic],
        'hitpoints': 60,
        'attack': 75,
        'defense': 85,
        'specialAttack': 100,
        'specialDefense': 85,
        'speed': 115,
    },
    {
        'id': 122,
        'name': 'Mr. Mime',
        'catchRate': 45,
        'type': [PokemonType.Psychic],
        'hitpoints': 40,
        'attack': 45,
        'defense': 65,
        'specialAttack': 100,
        'specialDefense': 120,
        'speed': 90,
        'femaleRatio': 0.5,
    },
    {
        'id': 123,
        'name': 'Scyther',
        'catchRate': 45,
        'type': [PokemonType.Bug, PokemonType.Flying],
        'hitpoints': 70,
        'attack': 110,
        'defense': 80,
        'specialAttack': 55,
        'specialDefense': 80,
        'speed': 105,
        'femaleRatio': 0.5,
    },
    {
        'id': 124,
        'name': 'Jynx',
        'catchRate': 45,
        'type': [PokemonType.Ice, PokemonType.Psychic],
        'hitpoints': 65,
        'attack': 50,
        'defense': 35,
        'specialAttack': 115,
        'specialDefense': 95,
        'speed': 95,
        'femaleRatio': 1,
    },
    {
        'id': 125,
        'name': 'Electabuzz',
        'catchRate': 45,
        'type': [PokemonType.Electric],
        'hitpoints': 65,
        'attack': 83,
        'defense': 57,
        'specialAttack': 95,
        'specialDefense': 85,
        'speed': 105,
        'femaleRatio': 0.25,
    },
    {
        'id': 126,
        'name': 'Magmar',
        'catchRate': 45,
        'type': [PokemonType.Fire],
        'hitpoints': 65,
        'attack': 95,
        'defense': 57,
        'specialAttack': 100,
        'specialDefense': 85,
        'speed': 93,
        'femaleRatio': 0.25,
    },
    {
        'id': 127,
        'name': 'Pinsir',
        'catchRate': 45,
        'type': [PokemonType.Bug],
        'hitpoints': 65,
        'attack': 125,
        'defense': 100,
        'specialAttack': 55,
        'specialDefense': 70,
        'speed': 85,
        'femaleRatio': 0.5,
    },
    {
        'id': 128,
        'name': 'Tauros',
        'catchRate': 45,
        'type': [PokemonType.Normal],
        'hitpoints': 75,
        'attack': 100,
        'defense': 95,
        'specialAttack': 40,
        'specialDefense': 70,
        'speed': 110,
        'femaleRatio': 0,
    },
    {
        'id': 129,
        'name': 'Magikarp',
        'catchRate': 255,
        'type': [PokemonType.Water],
        'hitpoints': 20,
        'attack': 10,
        'defense': 55,
        'specialAttack': 15,
        'specialDefense': 20,
        'speed': 80,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Gyarados',
                conditions: {
                    level: 20
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 130,
        'name': 'Gyarados',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 95,
        'attack': 125,
        'defense': 79,
        'specialAttack': 60,
        'specialDefense': 100,
        'speed': 81,
        'femaleRatio': 0.5,
    },
    {
        'id': 131,
        'name': 'Lapras',
        'catchRate': 45,
        'type': [PokemonType.Water, PokemonType.Ice],
        'hitpoints': 130,
        'attack': 85,
        'defense': 80,
        'specialAttack':85 ,
        'specialDefense': 95,
        'speed': 60,
        'femaleRatio': 0.5,
    },
    {
        'id': 132,
        'name': 'Ditto',
        'catchRate': 35,
        'type': [PokemonType.Normal],
        'hitpoints': 48,
        'attack': 48,
        'defense': 48,
        'specialAttack': 48,
        'specialDefense': 48,
        'speed': 48,
    },
    {
        'id': 133,
        'name': 'Eevee',
        'catchRate': 133,
        'type': [PokemonType.Normal],
        'hitpoints': 55,
        'attack': 55,
        'defense': 50,
        'specialAttack': 45,
        'specialDefense': 65,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Vaporeon',
                conditions: {
                    item: ItemList.WaterStone,
                    numItem: 1
                }
            },
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Jolteon',
                conditions: {
                    item: ItemList.ThunderStone,
                    numItem: 1
                }
            },
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Flareon',
                conditions: {
                    item: ItemList.FireStone,
                    numItem: 1
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 134,
        'name': 'Vaporeon',
        'catchRate': 45,
        'type': [PokemonType.Water],
        'hitpoints': 130,
        'attack': 65,
        'defense': 60,
        'specialAttack': 110,
        'specialDefense': 95,
        'speed': 65,
        'femaleRatio': 0.125,
    },
    {
        'id': 135,
        'name': 'Jolteon',
        'catchRate': 45,
        'type': [PokemonType.Electric],
        'hitpoints': 65,
        'attack': 65,
        'defense': 60,
        'specialAttack': 110,
        'specialDefense': 95,
        'speed': 130,
        'femaleRatio': 0.125,
    },
    {
        'id': 136,
        'name': 'Flareon',
        'catchRate': 45,
        'type': [PokemonType.Fire],
        'hitpoints': 65,
        'attack': 130,
        'defense': 60,
        'specialAttack': 95,
        'specialDefense': 110,
        'speed': 65,
        'femaleRatio': 0.125,
    },
    {
        'id': 137,
        'name': 'Porygon',
        'catchRate': 45,
        'type': [PokemonType.Normal],
        'hitpoints': 65,
        'attack': 60,
        'defense': 70,
        'specialAttack': 85,
        'specialDefense': 75,
        'speed': 40
    },
    {
        'id': 138,
        'name': 'Omanyte',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Water],
        'hitpoints': 35,
        'attack': 40,
        'defense': 100,
        'specialAttack': 90,
        'specialDefense': 55,
        'speed': 35,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Omastar',
                conditions: {
                    level: 40
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 139,
        'name': 'Omastar',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Water],
        'hitpoints': 70,
        'attack': 60,
        'defense': 125,
        'specialAttack': 115,
        'specialDefense': 70,
        'speed': 55,
        'femaleRatio': 0.125,
    },
    {
        'id': 140,
        'name': 'Kabuto',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Water],
        'hitpoints': 30,
        'attack': 80,
        'defense': 90,
        'specialAttack': 55,
        'specialDefense': 45,
        'speed': 55,
        'evolutions': [
            {
                type: EvolutionType.ItemEvolution,
                pokemonName: 'Kabutops',
                conditions: {
                    level: 40
                }
            }
        ],
        'femaleRatio': 0.125,
    },
    {
        'id': 141,
        'name': 'Kabutops',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Water],
        'hitpoints': 60,
        'attack': 115,
        'defense': 105,
        'specialAttack': 65,
        'specialDefense': 70,
        'speed': 80,
        'femaleRatio': 0.125,
    },
    {
        'id': 142,
        'name': 'Aerodactyl',
        'catchRate': 45,
        'type': [PokemonType.Rock, PokemonType.Flying],
        'hitpoints': 80,
        'attack': 105,
        'defense': 65,
        'specialAttack': 60,
        'specialDefense': 75,
        'speed': 130,
        'femaleRatio': 0.125,
    },
    {
        'id': 143,
        'name': 'Snorlax',
        'catchRate': 25,
        'type': [PokemonType.Normal],
        'hitpoints': 160,
        'attack': 110,
        'defense': 65,
        'specialAttack': 65,
        'specialDefense': 110,
        'speed': 30,
        'femaleRatio': 0.125,
    },
    {
        'id': 144,
        'name': 'Articuno',
        'catchRate': 3,
        'type': [PokemonType.Ice, PokemonType.Flying],
        'hitpoints': 90,
        'attack': 85,
        'defense': 100,
        'specialAttack': 95,
        'specialDefense': 125,
        'speed': 85,
    },
    {
        'id': 145,
        'name': 'Zapdos',
        'catchRate': 3,
        'type': [PokemonType.Electric, PokemonType.Flying],
        'hitpoints': 90,
        'attack': 90,
        'defense': 85,
        'specialAttack': 125,
        'specialDefense': 90,
        'speed': 100,
    },
    {
        'id': 146,
        'name': 'Moltres',
        'catchRate': 3,
        'type': [PokemonType.Fire, PokemonType.Flying],
        'hitpoints': 90,
        'attack': 100,
        'defense': 90,
        'specialAttack': 125,
        'specialDefense': 85,
        'speed': 90,
    },
    {
        'id': 147,
        'name': 'Dratini',
        'catchRate': 45,
        'type': [PokemonType.Dragon],
        'hitpoints': 41,
        'attack': 64,
        'defense': 45,
        'specialAttack': 50,
        'specialDefense': 50,
        'speed': 50,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Dragonair',
                conditions: {
                    level: 30
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 148,
        'name': 'Dragonair',
        'catchRate': 45,
        'type': [PokemonType.Dragon],
        'hitpoints': 61,
        'attack': 84,
        'defense': 65,
        'specialAttack': 70,
        'specialDefense': 70,
        'speed': 70,
        'evolutions': [
            {
                type: EvolutionType.LevelEvolution,
                pokemonName: 'Dragonite',
                conditions: {
                    level: 55
                }
            }
        ],
        'femaleRatio': 0.5,
    },
    {
        'id': 149,
        'name': 'Dragonite',
        'catchRate': 45,
        'type': [PokemonType.Dragon, PokemonType.Flying],
        'hitpoints': 91,
        'attack': 134,
        'defense': 95,
        'specialAttack': 100,
        'specialDefense': 100,
        'speed': 80,
        'femaleRatio': 0.5,
    },
    {
        'id': 150,
        'name': 'Mewtwo',
        'catchRate': 3,
        'type': [PokemonType.Psychic],
        'hitpoints': 106,
        'attack': 110,
        'defense': 90,
        'specialAttack': 154,
        'specialDefense': 90,
        'speed': 130,
    },
    {
        'id': 151,
        'name': 'Mew',
        'catchRate': 45,
        'type': [PokemonType.Psychic],
        'hitpoints': 100,
        'attack': 100,
        'defense': 100,
        'specialAttack': 100,
        'specialDefense': 100,
        'speed': 100,
    },
    /**
    {
        'id': ,
        'name': '',
        'catchRate': ,
        'type': [PokemonType.],
        'hitpoints': ,
        'attack': ,
        'defense': ,
        'specialAttack': ,
        'specialDefense': ,
        'speed': ,
        'evolutions': [
            {
                type: EvolutionType.,
                pokemonName: '',
                conditions: {
                    level: xx
                    item: ItemList.x,
                    numItem: x
                }
            }
        ],
        'femaleRatio': 0.5,
    },
     */
)