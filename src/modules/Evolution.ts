export enum EvolutionType {
    'LevelEvolution',
    'ItemEvolution'
}

export type EvolutionData = {
    type: EvolutionType, 
    pokemonName: string,
    conditions: {}
};