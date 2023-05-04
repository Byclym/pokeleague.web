<script lang="ts">
import Pokemon from '../../modules/Pokemon';
import { getPokemonById, getPokemonByName } from '../../modules/manager/PokemonManager';

    export default {
        data() {
            const bulbasaur = new Pokemon(getPokemonByName('Bulbasaur'), 20);
            return {
                pokemonByLevel: bulbasaur
            }
        },
        methods: {
            evolve(pokemon: Pokemon) {
                pokemon.evolve(pokemon.pokemon.evolutions[0])
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
                <div class="card shadow-sm" @click="evolve(pokemonByLevel)">{{ pokemonByLevel.getName() }}</div>
            </div>
        </div>
    </div>
</template>