import { EvolutionData, PokemonData } from "../Evolution";
import Game from "../Game";
import Pokemon from "../Pokemon";
import { getPokemonByName } from "./PokemonManager";

function evolveByLevel(pokemon: Pokemon,evolutionData: EvolutionData): void {
    if(pokemon.level < evolutionData.conditions[0]) throw new Error('evolveByLevel - condition not met - level too low');
    pokemon.pokemon = getEvolvedPokemonByName(evolutionData.pokemonName);
}

function evolveByItem(pokemon: Pokemon,evolutionData: EvolutionData, game: Game): void {
    const oSlot = game.bagpack.slots.find((d) => d.item.name === evolutionData.conditions[0].name);
    if(!oSlot) throw new Error('evolveByLevel - condition not met - no item');
    if(oSlot.count == 0) throw new Error('evolveByLevel - condition not met - insufficient count');
    oSlot.count-= 1;
    pokemon.pokemon = getEvolvedPokemonByName(evolutionData.pokemonName);
}

function getEvolvedPokemonByName(name: string): PokemonData {
    return getPokemonByName(name);
}

export function evolveManager(game: Game,pokemon: Pokemon,evolutionData: EvolutionData): void {
    switch (evolutionData.type) {
        case 0:
            evolveByLevel(pokemon, evolutionData);
            break;
        case 1:
            evolveByItem(pokemon, evolutionData, game);
            break;
        default:
            throw new Error('evolveManager - TypeEvolution inconnue');
    }
}
