import { EvolutionData, PokemonData } from "../Evolution";
import Pokemon from "../Pokemon";
import { getPokemonByName } from "./PokemonManager";

function evolveByLevel(pokemon: Pokemon,evolutionData: EvolutionData): void {
    if(pokemon.level < evolutionData.conditions[0]) throw new Error('evolveByLevel - condition not met - level too low');
    pokemon.pokemon = getEvolvedPokemonByName(evolutionData.pokemonName);
}


function evolveByItem(pokemon: Pokemon,evolutionData: EvolutionData): void {
    //TODO: à intégrer (vérifier dans le sac si l'objet est bien présent)
}

function getEvolvedPokemonByName(name: string): PokemonData {
    return getPokemonByName(name);
}

export function evolveManager(pokemon: Pokemon,evolutionData: EvolutionData): void {
    switch (evolutionData.type) {
        case 0:
            evolveByLevel(pokemon, evolutionData);
            break;
        case 1:
            evolveByItem(pokemon, evolutionData);
            break;
        default:
            throw new Error('evolveManager - TypeEvolution inconnue');
    }
}
