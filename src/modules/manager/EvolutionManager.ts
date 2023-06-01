import { EvolutionData } from "../Evolution";
import Game from "../Game";
import Pokemon from "../Pokemon";
import { PokemonData } from "../PokemonList";
import { getPokemonByName } from "./PokemonManager";

function getEvolvedPokemonByName(name: string): PokemonData {
    return getPokemonByName(name);
}

function evolveByLevel(pokemon: Pokemon,evolutionData: EvolutionData): void {
    if(pokemon.level < evolutionData.conditions['level']) throw new Error('evolveByLevel - condition not met - level too low');
    pokemon.pokemon = getEvolvedPokemonByName(evolutionData.pokemonName);
}

function evolveByItem(pokemon: Pokemon,evolutionData: EvolutionData, game: Game): void {
    const oSlot = game.getBackpack().getSlots().find((d) => d.item.getName() === evolutionData.conditions['item'].name);
    if(!oSlot) throw new Error('evolveByLevel - condition not met - no item');
    if(oSlot.count < evolutionData.conditions['numItem']) throw new Error('evolveByLevel - condition not met - insufficient count');
    oSlot.count-= (oSlot.count < evolutionData.conditions['numItem']);
    pokemon.pokemon = getEvolvedPokemonByName(evolutionData.pokemonName);
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

function ifConditionEvolveByLevel(pokemon: Pokemon,evolutionData: EvolutionData): boolean {
    if(pokemon.level < evolutionData.conditions['level']) return false;
    return true;
}

function ifConditionEvolveByItem(evolutionData: EvolutionData, game: Game): boolean {
    const oSlot = game.getBackpack().getSlots().find((d) => d.item.name === evolutionData.conditions['item'].name);
    if(!oSlot) return false;
    if(oSlot.count < evolutionData.conditions['numItem']) return false;
    return true;
}

export function ifConditionEvolveManager(game: Game,pokemon: Pokemon,evolutionData: EvolutionData): boolean {
    switch (evolutionData.type) {
        case 0:
            return ifConditionEvolveByLevel(pokemon, evolutionData);
            break;
        case 1:
            return ifConditionEvolveByItem(evolutionData, game);
        default:
            return false;
    }
}
