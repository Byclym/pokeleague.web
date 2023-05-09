<script lang="ts">
import Pokemon from '../../modules/Pokemon';
import { getPokemonById, getPokemonByName } from '../../modules/manager/PokemonManager';
import { PlayerTrainerType } from '../../modules/TrainerType';
import Game from '../../modules/Game';
import PlayerTrainer from '../../modules/PlayerTrainer';
import { SlotBackpack } from '../../modules/SlotBackpack';
import { ItemList } from '../../modules/Item';
import { getPlayerTrainerByName } from '../../modules/manager/TrainerManager';

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
            game.bagpack.slots.push(new SlotBackpack(ItemList.WaterStone, 1));
            game.bagpack.slots.push(new SlotBackpack(ItemList.FireStone, 1));
            game.bagpack.slots.push(new SlotBackpack(ItemList.ThunderStone, 1));


            localStorage.setItem('game', JSON.stringify(game));

            const bulbasaur = new Pokemon(getPokemonByName('Bulbasaur'), 20);
            const eevee1 = new Pokemon(getPokemonByName('Eevee'), 20);
            const eevee2 = new Pokemon(getPokemonByName('Eevee'), 20);
            const eevee3 = new Pokemon(getPokemonByName('Eevee'), 20);
            return {
                game: game,
                pokemonByLevel: bulbasaur,
                EeeveToVaporeon: eevee1,
                EeeveToJolteon: eevee2,
                EeeveToFlaeron: eevee3
            }
        },
        methods: {
            evolve(pokemon: Pokemon, idEvolution: Number) {
                pokemon.evolve(this.game, pokemon.pokemon.evolutions[idEvolution])
            }
        }
    }
</script>

<template>
    <h1>Evolve Test</h1>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h2>LevelEvolution</h2>
                <div class="card shadow-sm" @click="evolve(pokemonByLevel, 0)">{{ pokemonByLevel.getName() }}</div>
            </div>
            <div class="col-6">
                <h2>Item Evolution</h2>
                <div class="card shadow-sm" @click="evolve(EeeveToVaporeon, 0)">{{ EeeveToVaporeon.getName() }}</div>
                <div class="card shadow-sm" @click="evolve(EeeveToJolteon, 1)">{{ EeeveToJolteon.getName() }}</div>
                <div class="card shadow-sm" @click="evolve(EeeveToFlaeron, 2)">{{ EeeveToFlaeron.getName() }}</div>
            </div>
        </div>
        <div class="row">
            
        </div>
    </div>
</template>