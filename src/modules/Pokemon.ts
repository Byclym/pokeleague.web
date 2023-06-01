import PokemonType from "./PokemonType";
import { PokemonData } from "./PokemonList";
import { getTypeEffectiveness } from './manager/TypeManager'
import { EvolutionData } from "./Evolution";
import { evolveManager, ifConditionEvolveManager } from "./manager/EvolutionManager";
import Game from "./Game";

export default class Pokemon {

    constructor(
        private pokemon: PokemonData, 
        private level: number
    ){
    }

    public getCatchRate(): number { return this.pokemon.catchRate }
    public getName(): string { return this.pokemon.name }
    public getLevel(): number { return this.level }
    public getPokemonData(): PokemonData { return this.pokemon }
    public getType(): PokemonType[] { return this.pokemon.type }
    
    
    public canEvolve(game: Game,evolution: EvolutionData)
    { 
        return ifConditionEvolveManager(game, this, evolution)
    }

    public evolve(game: Game,evolution: EvolutionData): void
    {
        evolveManager(game, this, evolution);
    }

    public getAvailableEvolve(game: Game): any
    {
        var availableEvolve = [];
        this.pokemon.evolutions?.forEach((tmpEvolution) => {
            if(ifConditionEvolveManager(game, this, tmpEvolution)) availableEvolve.push(tmpEvolution);
        });
        return availableEvolve;
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

    public levelUp(): void
    {
        this.level++;
    }
}