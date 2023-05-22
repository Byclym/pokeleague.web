<script lang="ts">
import Battle from '../../modules/Battle';
import BotTrainer from '../../modules/BotTrainer';
import PlayerTrainer from '../../modules/PlayerTrainer';
import Pokemon from '../../modules/Pokemon';
import { getBotTrainerByName, getPlayerTrainerByName } from '../../modules/manager/TrainerManager';


export default {
    props: {
        botTrainer: null,
        playerTrainer: null,
        level: null,
    },
    data() {
        return {
            bot:    null,
            combat: null,
            player: null
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
        },
        endFight() {
            this.$emit('consequencefight', this.combat.ifWin)
        },
        newBattle(player, bot) {
            console.log('newBattle')
            this.player = player;
            this.bot = bot;
            this.combat = new Battle(this.player, this.bot);
            this.combat.debut();
        }
    }
}
</script>

<template>
    
    <div v-if="combat" class="modal-pascal">
        <div class="modal-content">
            <h1>Battle Test</h1>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2>{{ player.name }}</h2>
                        <h3>Pokémon</h3>
                        <div v-if="combat.selectedPokemonPlayer" class="card shadow-sm">{{ combat.selectedPokemonPlayer.getName() }} ({{ combat.selectedPokemonPlayer.getInitialScore() }})</div>
                        <h3>Team</h3>
                        <div v-for="pokemon in combat.teamPlayer" class="card shadow-sm" @click="selectPokemon(pokemon)">{{ pokemon.getName() }} ({{ pokemon.getInitialScore() }})</div>
                    </div>

                    <div class="col-6">
                        <h2>{{ bot.name }}</h2>
                        <h3>Pokémon</h3>
                        <div v-if="combat.selectedPokemonOpponent" class="card shadow-sm">{{ combat.selectedPokemonOpponent.getName() }} ({{ combat.selectedPokemonOpponent.getInitialScore() }})</div>
                        <h3>Team</h3>
                        <div v-for="pokemon in combat.teamBot" class="card shadow-sm">{{ pokemon.getName() }} ({{ pokemon.getInitialScore() }})</div>
                    </div>
                </div>

                <div class="row">
                    <h2>Historique Combat</h2>
                    <div v-for="div in combat.historical">
                        <div class="row">{{div}}</div>
                    </div>
                    <button v-if="combat.action == 'waiting'" type="button" class="btn btn-primary" @click="continueFight('fight')">Combat</button>
                    <button v-if="combat.action == 'continue'" type="button" class="btn btn-primary" @click="continueFight('continue')">Continuer</button>
                    <button v-if="combat.action == 'finished'" type="button" class="btn btn-primary" @click="endFight()">Retour</button>
                </div>
            </div>
        </div>
    </div>
</template>