<script lang="ts">

    import PlayerTrainer from '../../modules/PlayerTrainer';
    import BotTrainer from '../../modules/BotTrainer';
    import { getPlayerTrainerByName, getBotTrainerByName } from '../../modules/manager/TrainerManager';
    import Pokemon from '../../modules/Pokemon';
    import Battle from '../../modules/Battle';

    export default {
        data() {
            const player = new PlayerTrainer(getPlayerTrainerByName('Player'));
            const bot = new BotTrainer(getBotTrainerByName('Grunt'));

            const combat = new Battle(player, bot)
            combat.debut();

            return {
                bot:    bot,
                combat: combat,
                player: player
            }
        },
        methods: {
            selectPokemon(pokemon: Pokemon) {
                if(this.combat.selectedPokemonPlayer != null) return
                if(this.combat.action != 'selecting') return
                this.combat.playerSelectPokemon(pokemon)
            },
            continueFight(action: string) {
                this.combat.action = action;
                this.combat.nextAction();
            }
        }
    }
</script>

<template>
    <h1>Battle Test</h1>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h2>{{ player.name }}</h2>
                <h3>Pokémon</h3>
                <div v-if="combat.selectedPokemonPlayer" class="card shadow-sm">{{ combat.selectedPokemonPlayer.getName() }} ({{ combat.selectedPokemonPlayer.getInitialScore() }})</div>
                <h3>Team</h3>
                <div v-for="pokemon in player.pokemons" class="card shadow-sm" @click="selectPokemon(pokemon)">{{ pokemon.getName() }} ({{ pokemon.getInitialScore() }})</div>
            </div>

            <div class="col-6">
                <h2>{{ bot.name }}</h2>
                <h3>Pokémon</h3>
                <div v-if="combat.selectedPokemonOpponent" class="card shadow-sm">{{ combat.selectedPokemonOpponent.getName() }} ({{ combat.selectedPokemonOpponent.getInitialScore() }})</div>
                <h3>Team</h3>
                <div v-for="pokemon in bot.pokemons" class="card shadow-sm">{{ pokemon.getName() }} ({{ pokemon.getInitialScore() }})</div>
            </div>
        </div>

        <div class="row">
            <h2>Historique Combat</h2>
            <div v-for="div in combat.historical">
                <div class="row">{{div}}</div>
            </div>
            <button v-if="combat.action == 'waiting'" type="button" class="btn btn-primary" @click="continueFight('fight')">Combat</button>
            <button v-if="combat.action == 'continue'" type="button" class="btn btn-primary" @click="continueFight('continue')">Continuer</button>
        </div>
    </div>
</template>