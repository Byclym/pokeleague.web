import Pokemon from "../Pokemon";

export default interface TrainerInterface {
    name: string;
    pokemons: Pokemon[];
    addPokemon: (pokemon: Pokemon) => void;
}