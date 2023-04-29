import Pokemon from '../Pokemon';
import { PokemonData, pokemonList } from '../PokemonList'

export function getPokemonById(id: number): Pokemon | undefined {
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
        };
        return pokemonData;
    }
    return undefined;
}