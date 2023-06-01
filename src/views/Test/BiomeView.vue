<script lang="ts">
import Pokemon from '../../modules/Pokemon';
import { getPokemonById } from '../../modules/manager/PokemonManager';
import { PlayerTrainerType } from '../../modules/TrainerType';
import PlayerTrainer from '../../modules/PlayerTrainer';
import { getPlayerTrainerByName } from '../../modules/manager/TrainerManager';
import Game from '../../modules/Game';
import { SlotBackpack } from '../../modules/SlotBackpack';
import { ItemList } from '../../modules/ItemList';

    export default {
        data() {
            const playerData = {
                'id': 'player',
                'name': 'Player',
                'type': PlayerTrainerType.Player,
                'pokemonType': null,
                'pokemons': [
                    new Pokemon(getPokemonById(1), 10),
                    new Pokemon(getPokemonById(4), 10),
                    new Pokemon(getPokemonById(7), 10)
                ]
            }
            const leaders = [];
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Lance')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Agatha')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Bruno')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Lorelei')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Giovanni')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Blaine')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Sabrina')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Koga')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Erika')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Lt. Surge')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Misty')));
            leaders.push(new PlayerTrainer(getPlayerTrainerByName('Brock')));

            const game = new Game(new PlayerTrainer(playerData),leaders);
            game.getBackpack().getSlots().push(new SlotBackpack(ItemList.PokeBall, 100));

            return {
                game: game
            }
        },
        methods: {
        }
    }
</script>

<template>
    <h1>Evolve Test</h1>
    <div class="container">
        <div class="row">
            <h2>Biome</h2>
        </div>
        <div class="row">
            
        </div>
    </div>
</template>