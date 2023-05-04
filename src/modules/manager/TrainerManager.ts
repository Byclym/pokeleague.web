import BotTrainer from '../BotTrainer';
import PlayerTrainer from '../PlayerTrainer';
import { BotTrainerList, PlayerTrainerList, TrainerData } from '../TrainerList'

export function getPlayerTrainerByName(name: string): PlayerTrainer {
    const trainer = PlayerTrainerList.find((trainer) => trainer.name === name);
    if (trainer) {
        const trainerData: TrainerData = {
                name: trainer.name,
                type: trainer.type,
                pokemons: trainer.pokemons,
        };
        return trainerData;
    }
    throw new Error('TrainerManager - Method getPokemonById - Aucun résultat retourné');
}

export function getBotTrainerByName(name: string): BotTrainer {
    const trainer = BotTrainerList.find((trainer) => trainer.name === name);
    if (trainer) {
        const trainerData: TrainerData = {
                name: trainer.name,
                type: trainer.type,
                pokemons: trainer.pokemons,
        };
        return trainerData;
    }
    throw new Error('TrainerManager - Method getPokemonById - Aucun résultat retourné');
}