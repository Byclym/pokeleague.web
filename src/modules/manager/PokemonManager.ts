import { PokemonData, pokemonList } from '../PokemonList'

export function getPokemonById(id: number): PokemonData {
    const pokemon = pokemonList.find((pokemon) => pokemon.id === id);
    if (pokemon) {
        const pokemonData: PokemonData = {
            id: pokemon.id,
            name: pokemon.name,
            catchRate: pokemon.catchRate,
            type: pokemon.type,
            hitpoints: pokemon.hitpoints,
            attack: pokemon.attack,
            specialAttack: pokemon.specialAttack,
            defense: pokemon.defense,
            specialDefense: pokemon.specialDefense,
            speed: pokemon.speed,
            evolutions: pokemon.evolutions,
        };
        return pokemonData;
    }
    throw new Error('PokemonManager - Method getPokemonById - Aucun résultat retourné');
}

export function getPokemonByName(name: string): PokemonData {
    const pokemon = pokemonList.find((pokemon) => pokemon.name === name);
    if (pokemon) {
        const pokemonData: PokemonData = {
            id: pokemon.id,
            name: pokemon.name,
            catchRate: pokemon.catchRate,
            type: pokemon.type,
            hitpoints: pokemon.hitpoints,
            attack: pokemon.attack,
            specialAttack: pokemon.specialAttack,
            defense: pokemon.defense,
            specialDefense: pokemon.specialDefense,
            speed: pokemon.speed,
            evolutions: pokemon.evolutions,
        };
        return pokemonData;
    }
    throw new Error('PokemonManager - Method getPokemonById - Aucun résultat retourné');
}