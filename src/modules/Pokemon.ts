import PokemonType from "./PokemonType";
import { PokemonData } from "./PokemonList";
import { getTypeEffectiveness } from './manager/TypeManager'
import { EvolutionData } from "./Evolution";
import { evolveManager, ifConditionEvolveManager } from "./manager/EvolutionManager";
import Game from "./Game";

export default class Pokemon {
    pokemon: PokemonData
    level: number;
  
    constructor(pokemon: PokemonData, level: number)
    {
        this.pokemon = pokemon;
        this.level = level;
    }

    public getInitialScore(): number
    {
        return (this.pokemon.hitpoints
            + this.pokemon.attack
            + this.pokemon.specialAttack
            + this.pokemon.defense
            + this.pokemon.specialDefense
            + this.pokemon.speed) * (this.level / 10);
    }

    public getScoreAgainstPokemon(opponent: Pokemon): number
    {
        return this.getInitialScore() * getTypeEffectiveness(this.getType(),opponent.getType());
    }

    public evolve(game: Game,evolution: EvolutionData): void
    {
        evolveManager(game, this, evolution);
    }

    public levelUp(): void
    {
        this.level++;
    }
    public getAvailableEvolve(game: Game): any
    {
        var availableEvolve = [];
        this.pokemon.evolutions?.forEach((tmpEvolution) => {
            if(ifConditionEvolveManager(game, this, tmpEvolution)) availableEvolve.push(tmpEvolution);
        });
        return availableEvolve;
    }

    public getName(): string { return this.pokemon.name }
    public getType(): PokemonType[] { return this.pokemon.type }
    public getCatchRate(): number { return this.pokemon.catchRate }
    public canEvolve(game: Game,evolution: EvolutionData) { return ifConditionEvolveManager(game, this, evolution)}
}