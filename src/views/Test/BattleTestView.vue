<script lang="ts">

    import PlayerTrainer from '../../modules/PlayerTrainer';
    import BotTrainer from '../../modules/BotTrainer';
    import { getPokemonById } from '../../modules/manager/PokemonManager';
    import Pokemon from '../../modules/Pokemon';
    import Battle from '../../modules/Battle';

    export default {
        data() {

            const bulbasaur = new Pokemon(getPokemonById(1));
            const charmander = new Pokemon(getPokemonById(4));
            const squirtle = new Pokemon(getPokemonById(7));

            const alolanSandslash = new Pokemon(getPokemonById(27.01));
            const blaziken = new Pokemon(getPokemonById(257));

            const player = new PlayerTrainer('Player');
            const bot = new BotTrainer('Bot');

            player.addPokemon(bulbasaur);
            player.addPokemon(charmander);
            player.addPokemon(squirtle);
            bot.addPokemon(bulbasaur);
            bot.addPokemon(charmander);
            bot.addPokemon(squirtle);

            const combat = new Battle(player, bot)
            combat.debut();

            return {
                bot:    bot,
                combat: combat,
                player: player
            }
        },
        methods: {
            selectPokemon(pokemon) {
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
                <div v-if="combat.selectedPokemonPlayer" class="card shadow-sm">{{ combat.selectedPokemonPlayer.name }} ({{ combat.selectedPokemonPlayer.getInitialScore() }})</div>
                <h3>Team</h3>
                <div v-for="pokemon in player.pokemons" class="card shadow-sm" @click="selectPokemon(pokemon)">{{ pokemon.name }} ({{ pokemon.getInitialScore() }})</div>
            </div>

            <div class="col-6">
                <h2>{{ bot.name }}</h2>
                <h3>Pokémon</h3>
                <div v-if="combat.selectedPokemonOpponent" class="card shadow-sm">{{ combat.selectedPokemonOpponent.name }} ({{ combat.selectedPokemonOpponent.getInitialScore() }})</div>
                <h3>Team</h3>
                <div v-for="pokemon in bot.pokemons" class="card shadow-sm">{{ pokemon.name }} ({{ pokemon.getInitialScore() }})</div>
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