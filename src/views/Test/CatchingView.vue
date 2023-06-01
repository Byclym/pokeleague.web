<script lang="ts">
import Game from '../../modules/Game';
import Catching from '../../modules/Catching';
import { ItemList } from '../../modules/ItemList';
import PlayerTrainer from '../../modules/PlayerTrainer';
import Pokemon from '../../modules/Pokemon';
import { SlotBackpack } from '../../modules/SlotBackpack';
import { PlayerTrainerType } from '../../modules/TrainerType';
import { getPokemonByName } from '../../modules/manager/PokemonManager';
import { getPlayerTrainerByName } from '../../modules/manager/TrainerManager';

export default {
    data() {
        const playerData = {
            'id': 'player',
            'name': 'Player',
            'type': PlayerTrainerType.Player,
            'pokemonType': null,
            'pokemons': [
                new Pokemon(getPokemonByName('Bulbasaur'), 10),
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

        const game = new Game(new PlayerTrainer(playerData),leaders, []);

        game.getBackpack().addItem(ItemList.PokeBall, 100);
        game.getBackpack().addItem(ItemList.GreatBall, 100);
        game.getBackpack().addItem(ItemList.UltraBall, 100);


        const target= new Pokemon(getPokemonByName('Rattata'), 10);

        return {
            target: target,
            game: game,
        }
    },
    methods: {
        sendBall(ball: SlotBackpack) {
            if(this.target== null) return
            var catching= new Catching(this.game, this.target, ball);
            const result = catching.attempt()
            if(result == true) {
                this.target = null;
            }
        }
    }
}
</script>

<template>
    <h1>Catching Test</h1>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div v-if="this.target" class="card shadow-sm">{{ target.getName() }}</div>
            </div>
            
            <div class="col-6">
                <div v-for="ball in game.getBackpack().getBalls()" class="card shadow-sm" @click="sendBall(ball)">{{ ball.getItemName() }} {{ ball.getCount() }}</div>
            </div>
        </div>
    </div>
</template>