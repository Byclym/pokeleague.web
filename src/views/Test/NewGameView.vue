<script lang="ts">
import { ref } from 'vue'
import Game from '../../modules/Game';
import PlayerTrainer from '../../modules/PlayerTrainer';
import Pokemon from '../../modules/Pokemon';
import { getPokemonById } from '../../modules/manager/PokemonManager';
import { PlayerTrainerType } from '../../modules/TrainerType';
import { getPlayerTrainerByName } from '../../modules/manager/TrainerManager';
import { Town, Plateau } from '../../modules/City';
import BattleModal from '../../components/modal/BattleModal.vue';

const childRef = ref()
    export default {
    data() {
        const playerData = {
            "id": "player",
            "name": "Player",
            "type": PlayerTrainerType.Player,
            "pokemonType": null,
            "pokemons": [
                new Pokemon(getPokemonById(1), 10),
                new Pokemon(getPokemonById(4), 10),
                new Pokemon(getPokemonById(7), 10)
            ]
        };
        const plateau = new Plateau("Plateau Indigo");
        plateau.elite.push(new PlayerTrainer(getPlayerTrainerByName("Lorelei")));
        plateau.elite.push(new PlayerTrainer(getPlayerTrainerByName("Bruno")));
        plateau.elite.push(new PlayerTrainer(getPlayerTrainerByName("Agatha")));
        plateau.elite.push(new PlayerTrainer(getPlayerTrainerByName("Lance")));
        const towns = [];
        towns.push(new Town("Town 1"));
        towns.push(new Town("Town 2"));
        towns.push(new Town("Town 3"));
        towns.push(new Town("Town 4"));
        towns.push(new Town("Town 5"));
        towns.push(new Town("Town 6"));
        towns.push(new Town("Town 7"));
        towns.push(new Town("Town 8"));
        const game = new Game(new PlayerTrainer(playerData), plateau, towns);
        game.towns[0].gym = new PlayerTrainer(getPlayerTrainerByName("Brock"));
        game.towns[1].gym = new PlayerTrainer(getPlayerTrainerByName("Misty"));
        game.towns[2].gym = new PlayerTrainer(getPlayerTrainerByName("Lt. Surge"));
        game.towns[3].gym = new PlayerTrainer(getPlayerTrainerByName("Erika"));
        game.towns[4].gym = new PlayerTrainer(getPlayerTrainerByName("Koga"));
        game.towns[5].gym = new PlayerTrainer(getPlayerTrainerByName("Sabrina"));
        game.towns[6].gym = new PlayerTrainer(getPlayerTrainerByName("Blaine"));
        game.towns[7].gym = new PlayerTrainer(getPlayerTrainerByName("Giovanni"));
        game.nextDay();
        return {
            game: game,
            ifCombat: false,
            showModal: false,
            showModalPlateau: false,
            modal: {
                plateau: null,
                city: null,
            },
            fighting: {
                level: null,
                player: null,
                bot: null,
            },
        };
    },
    methods: {
        popupTown(element: unknown) {
            this.modal.city = element;
            this.showModal = true;
        },
        popupPlateau(element: unknown) {
            this.modal.plateau = element;
            this.showModalPlateau = true;
        },
        nextDay() {
            this.game.nextDay();
        },
        fight(level: number) {
          this.ifCombat = true;
          var bot = this.game.getChallengerByLevel(level);
          this.fighting.player = this.game.getOpponentChallenger(level);
          this.fighting.bot = bot.trainer;
          this.fighting.level = level;
          this.$refs.childRef.newBattle(this.fighting.player, this.fighting.bot)
        },
        consequence(result: boolean) {
          this.ifCombat= false;
          
          let bot = this.game.getChallengerByLevel(this.fighting.level)
          bot.toFight = false;
          if(result) {
            this.fighting.player.gainIP();
            bot.undefeated = false;
          }

          this.fighting.level= null;
          this.fighting.player= null;
          this.fighting.bot= null;
        },
        levelUp(trainer: PlayerTrainer, pokemon: Pokemon) {
          pokemon.levelUp();
          trainer.loseIP();
        },
    },
    components: { BattleModal }
}
</script>

<template>
  <BattleModal
    ref="childRef"
    v-show="ifCombat"
    v-bind:playerTrainer= "fighting.player"
    v-bind:botTrainer= "fighting.bot"
    v-bind:level= "fighting.level"
    @consequencefight="consequence($event)"
  >
  </BattleModal>
    <transition v-if="showModal" name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  {{ modal.city.name}}
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  {{ modal.city.gym.name}} {{ modal.city.gym.improvementPoint }} 

                    <div v-for="pokemon in modal.city.gym.pokemons" class="card shadow-sm">
                        {{ pokemon.getName() }} (LVL. {{ pokemon.level }}) <button v-if="modal.city.gym.improvementPoint > 0" class="modal-default-button" @click="levelUp(modal.city.gym, pokemon)">+</button>
                        <div v-for="evolution in pokemon.getAvailableEvolve(game)">
                          <button type="button" class="btn btn-primary" @click="pokemon.evolve(game, evolution)">Evolution</button>
                        </div>
                    </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="showModal = false">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    <transition v-if="showModalPlateau" name="modalPlateau">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  {{ modal.plateau.name}}
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  {{ game.player.name}} {{ game.player.improvementPoint }}
                  <div v-for="pokemon in game.player.pokemons" class="card shadow-sm">
                    {{ pokemon.getName() }} (LVL. {{ pokemon.level }})
                  </div>
                </slot>
                <slot v-for="elite in modal.plateau.elite" name="body">
                  {{ elite.name }} {{ elite.improvementPoint }}
                    <div v-for="pokemon in elite.pokemons" class="card shadow-sm">
                        {{ pokemon.getName() }} (LVL. {{ pokemon.level }})
                    </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="showModalPlateau = false">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    <h1 v-if="!ifCombat">Game Test</h1>
    <div class="container" v-if="!ifCombat">
        <button v-if="game.ifCanNextPhase(7)" type="button" class="btn btn-primary" @click="nextDay()">Jour Suivant : {{ game.day }}</button>
        <div class="row">
            <div class="col-12 card shadow-sm" @click="popupPlateau(game.plateau)">
                <h2>{{ game.plateau.name }}</h2>
                <button v-if="game.ifChallengerHere(12)" type="button" class="btn btn-primary" @click="fight(12)">Combat</button>
                <button v-if="game.ifChallengerHere(11)" type="button" class="btn btn-primary" @click="fight(11)">Combat</button>
                <button v-if="game.ifChallengerHere(10)" type="button" class="btn btn-primary" @click="fight(10)">Combat</button>
                <button v-if="game.ifChallengerHere(9)" type="button" class="btn btn-primary" @click="fight(9)">Combat</button>
                <button v-if="game.ifChallengerHere(8)" type="button" class="btn btn-primary" @click="fight(8)">Combat</button>
            </div>
        </div>
        <div class="row">
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[7])">{{ game.towns[7].name }}</h2>
                <button v-if="game.ifChallengerHere(7)" type="button" class="btn btn-primary" @click="fight(7)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[6])">{{ game.towns[6].name }}</h2>
                <button v-if="game.ifChallengerHere(6)" type="button" class="btn btn-primary" @click="fight(6)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[5])">{{ game.towns[5].name }}</h2>
                <button v-if="game.ifChallengerHere(5)" type="button" class="btn btn-primary" @click="fight(5)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[4])">{{ game.towns[4].name }}</h2>
                <button v-if="game.ifChallengerHere(4)" type="button" class="btn btn-primary" @click="fight(4)">Combat</button>
            </div>
        </div>
        <div class="row">
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[3])">{{ game.towns[3].name }}</h2>
                <button v-if="game.ifChallengerHere(3)" type="button" class="btn btn-primary" @click="fight(3)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[2])">{{ game.towns[2].name }}</h2>
                <button v-if="game.ifChallengerHere(2)" type="button" class="btn btn-primary" @click="fight(2)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[1])">{{ game.towns[1].name }}</h2>
                <button v-if="game.ifChallengerHere(1)" type="button" class="btn btn-primary" @click="fight(1)">Combat</button>
            </div>
            <div class="col-3 card shadow-sm">
                <h2 @click="popupTown(game.towns[0])">{{ game.towns[0].name }}</h2>
                <button v-if="game.ifChallengerHere(0)" type="button" class="btn btn-primary" @click="fight(0)">Combat</button>
            </div>
        </div>
    </div>
</template>